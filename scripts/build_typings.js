import fs from 'fs'
import listFiles from './_lib/list_files'
import listLocales from './_lib/list_locales'
import jsDocs from '../dist/date_fns_docs.json'

const lowerCaseTypes = ['String', 'Number', 'Boolean']

const typeScriptInterfaces = []
  .concat('interface CurriedFn1<A, R> {')
  .concat('  <A>(a: A): R')
  .concat('}')
  .concat('')
  .concat('interface CurriedFn2<A, B, R> {')
  .concat('  <A>(a: A): CurriedFn1<B, R>')
  .concat('  <A, B>(a: A, b: B): R')
  .concat('}')
  .concat('')
  .concat('interface CurriedFn3<A, B, C, R> {')
  .concat('  <A>(a: A): CurriedFn2<B, C, R>')
  .concat('  <A,B>(a: A, b: B): CurriedFn1<C, R>')
  .concat('  <A,B,C>(a: A, b: B, c: C): R')
  .concat('}')
  .concat('')
  .concat('interface CurriedFn4<A, B, C, D, R> {')
  .concat('  <A>(a: A): CurriedFn3<B, C, D, R>')
  .concat('  <A,B>(a: A, b: B): CurriedFn2<C, D, R>')
  .concat('  <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>')
  .concat('  <A,B,C,D>(a: A, b: B, c: C, d: D): R')
  .concat('}')
  .join('\n')

const files = listFiles()
const locales = listLocales()

const fns = Object.keys(jsDocs)
  .map(category => jsDocs[category])
  .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])
  .map(doc => {
    const {name} = doc.content
    const file = files.find(file => file.name === name)
    doc.file = file
    return doc
  })
  .filter(doc => doc.file)
  .sort((a, b) => a.content.name.localeCompare(b.content.name))

const aliases = jsDocs['Types']

generateTypeScriptTypings(fns, aliases, locales)
generateFlowTypings(fns, aliases)

// Common

function correctTypeCase (type) {
  if (lowerCaseTypes.includes(type)) {
    return type.toLowerCase()
  }
  return type
}

function getParams (params, {indent = 1, leftBorder = '{', rightBorder = '}'} = {}) {
  if (params.length === 0) {
    return '()'
  }

  const props = params
    .filter(param => param.name.includes('.'))
    .map(param => {
      const [parent, name] = param.name.split('.')
      const {type, variable, optional} = param
      return {
        parent,
        name,
        type,
        variable,
        optional
      }
    })

  const paramIndent = '  '.repeat(indent + 1)
  const borderIndent = '  '.repeat(indent)

  return [leftBorder]
    .concat(params
      .filter(param => !param.name.includes('.'))
      .map(param => {
        const name = param.name
        const type = getType(param.type.names, {
          props: props.filter(param => param.parent === name),
          forceArray: param.variable,
          indent
        })
        return `${paramIndent}${param.variable ? '...' : ''}${name}${param.optional ? '?' : ''}: ${type}`
      })
      .join(',\n')
    )
    .concat(borderIndent + rightBorder)
    .join('\n')
}

function getType (types, {props = [], forceArray = false, indent = 1} = {}) {
  const typeStrings = types.map(type => {
    if (type === '*') {
      return 'any'
    }

    if (type === 'function') {
      return 'Function'
    }

    if (type.startsWith('Array.')) {
      const [, arrayType] = type.match(/^Array\.<(\w+)>$/i)
      return `${correctTypeCase(arrayType)}[]`
    }

    if (props.length > 0) {
      return getParams(props, {indent: indent + 1})
    }

    const caseCorrectedType = correctTypeCase(type)
    if (forceArray) {
      return `${caseCorrectedType}[]`
    }

    return caseCorrectedType
  })

  const allArrayTypes = typeStrings.length > 1 && typeStrings.every(type => type.endsWith('[]'))
  if (allArrayTypes) {
    return `(${typeStrings.map(type => type.replace('[]', '')).join(' | ')})[]`
  }

  return typeStrings.join(' | ')
}

function getFpFnType (params, returns, withOptions) {
  const fpParams = params
    .filter(param => !param.name.includes('.'))
    .reverse()
    .filter((_, index) => withOptions || index !== 0)
    .map(param => param.type.names)

  const arity = fpParams.length

  fpParams.push(returns)

  return `CurriedFn${arity}<${fpParams.map(getType).join(', ')}>`
}

// TypeScript

function getTypeScriptTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})

  return `type ${name} = ${properties}`
}

function getTypeScriptDateFnsModuleDefinition (fns) {
  const definition = ['declare module \'date-fns\' {']
    .concat(fns.map(getTypeScriptFnDefinition).join('\n\n'))
    .concat('}')
    .join('\n')

  return {
    name: 'date-fns',
    definition
  }
}

function getTypeScriptDateFnsFpModuleDefinition (fns) {
  const fnDefinitions = []
    .concat(fns.map(getTypeScriptFpFnDefinition.bind(null, false)))
    .concat(fns.map(getTypeScriptFpFnDefinition.bind(null, true)))
    .join('\n\n')

  const definition = ['declare module \'date-fns/fp\' {']
    .concat(fnDefinitions)
    .concat('}')
    .join('\n')

  return {
    name: 'date-fns/fp',
    definition
  }
}

function getTypeScriptFnModuleDefinition (moduleSuffix, fn) {
  const name = fn.content.name
  const snakeCaseName = fn.file.snakeCaseName
  const moduleName = `date-fns/${snakeCaseName}${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns'`)
    .concat(`  export = ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptFnDefinition (fn) {
  const name = fn.content.name

  const params = getParams(fn.content.params, {indent: 1, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  return [`  function ${name} ${params}: ${returns}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function getTypeScriptFpFnDefinition (withOptions, fn) {
  const nameSuffix = withOptions ? 'withOptions' : ''
  const name = `${fn.content.name}${nameSuffix}`

  const type = getFpFnType(fn.content.params, fn.content.returns[0].type.names, withOptions)

  return [`  let ${name}: ${type}`]
    .concat(`  namespace ${name} {}`)
    .join('\n')
}

function getTypeScriptFpFnModuleDefinition (moduleSuffix, withOptions, fn) {
  const name = fn.content.name
  const nameSuffix = withOptions ? 'withOptions' : ''
  const moduleName = `date-fns/fp/${name}${nameSuffix}${moduleSuffix}`

  const definition = [`declare module '${moduleName}' {`]
    .concat(`  import {${name}} from 'date-fns/fp'`)
    .concat(`  export = ${name}`)
    .concat('}')
    .join('\n')

  return {
    name: moduleName,
    definition
  }
}

function getTypeScriptLocaleModuleDefinition (moduleSuffix, locale) {
  const snakeCaseName = locale.snakeCaseName
  const name = `locale/${snakeCaseName}${moduleSuffix}`

  const definition = `declare module 'date-fns/${name}' {}`

  return {
    name,
    definition
  }
}

function generateTypeScriptTypings (fns, aliases, locales) {
  const aliasDefinitions = aliases
    .map(getTypeScriptTypeAlias)

  const moduleDefinitions = [getTypeScriptDateFnsModuleDefinition(fns)]
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '')))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/index')))
    .concat(fns.map(getTypeScriptFnModuleDefinition.bind(null, '/index.js')))
    .map(module => module.definition)

  const fpModuleDefinitions = [getTypeScriptDateFnsFpModuleDefinition(fns)]
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/index', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/index.js', false)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/index', true)))
    .concat(fns.map(getTypeScriptFpFnModuleDefinition.bind(null, '/index.js', true)))
    .map(module => module.definition)

  const localeModuleDefinitions = []
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '')))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/index')))
    .concat(locales.map(getTypeScriptLocaleModuleDefinition.bind(null, '/index.js')))
    .map(module => module.definition)
    .join('\n')

  const typingString = ['// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.']
    .concat(typeScriptInterfaces)
    .concat(aliasDefinitions)
    .concat(moduleDefinitions)
    .concat(fpModuleDefinitions)
    .concat(localeModuleDefinitions)
    .join('\n\n')

  fs.writeFileSync('./typings.d.ts', `${typingString}\n`)
}

// Flow

function generateFlowTypeAlias (type) {
  const name = type.content.name
  const properties = getParams(type.content.properties, {indent: 0})
  const filename = `./flow-typed/${name}.js.flow`

  const aliasString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`type ${name} = ${properties}\n`)
    .join('\n')

  fs.writeFileSync(filename, aliasString)
}

function generateFlowFnTyping (fn) {
  const snakeCaseName = fn.file.snakeCaseName
  const filename = `./src/${snakeCaseName}/index.js.flow`

  const params = getParams(fn.content.params, {indent: 0, leftBorder: '(', rightBorder: ')'})
  const returns = getType(fn.content.returns[0].type.names)

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`declare module.exports: ${params} => ${returns}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowFpFnTyping (fn, withOptions) {
  const name = fn.content.name
  const nameSuffix = withOptions ? 'withOptions' : ''
  const filename = `./src/fp/${name}${nameSuffix}/index.js.flow`

  const type = getFpFnType(fn.content.params, fn.content.returns[0].type.names, withOptions)

  const typingString = ['// @flow']
    .concat('// This file is generated automatically by `scripts/build_typings.js`. Please, don\'t change it.')
    .concat('')
    .concat(`declare module.exports: ${type}\n`)
    .join('\n')

  fs.writeFileSync(filename, typingString)
}

function generateFlowTypings (fns, aliases) {
  aliases.forEach(generateFlowTypeAlias)

  fns.forEach((fn) => {
    generateFlowFnTyping(fn)
    generateFlowFpFnTyping(fn, false)
    generateFlowFpFnTyping(fn, true)
  })
}
