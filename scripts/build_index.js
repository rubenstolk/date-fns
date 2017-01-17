import fs from 'fs'
import path from 'path'
import listFiles from './_lib/list_files'
import listFpFiles from './_lib/list_fp_files'

function generateIndex (files) {
  const propertyRequireLines = files
    .map((fn) => `  ${fn.name}: require('${fn.path.replace(/\.js$/, '')}/index.js')`)

  const indexLines = ['// This file is generated automatically by `scripts/build_index.js`. Please, don\'t change it.']
    .concat('')
    .concat('module.exports = {')
    .concat(propertyRequireLines.join(',\n'))
    .concat('}')

  return `${indexLines.join('\n')}\n`
}

fs.writeFileSync(path.join(process.cwd(), 'src/index.js'), generateIndex(listFiles()))
fs.writeFileSync(path.join(process.cwd(), 'src/fp/index.js'), generateIndex(listFpFiles()))
