// This file is generated automatically by `scripts/build_typings.js`. Please, don't change it.

interface CurriedFn1<A, R> {
  <A>(a: A): R
}

interface CurriedFn2<A, B, R> {
  <A>(a: A): CurriedFn1<B, R>
  <A, B>(a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  <A>(a: A): CurriedFn2<B, C, R>
  <A,B>(a: A, b: B): CurriedFn1<C, R>
  <A,B,C>(a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  <A>(a: A): CurriedFn3<B, C, D, R>
  <A,B>(a: A, b: B): CurriedFn2<C, D, R>
  <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>
  <A,B,C,D>(a: A, b: B, c: C, d: D): R
}

type Range = {
  start: Date | string | number,
  end: Date | string | number
}

type Options = {
  weekStartsOn?: number,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
  partialMethod?: 'floor' | 'ceil' | 'round'
}

type Locale = {
  distanceInWords?: {
    localize?: Function
  },
  format?: {
    formatters?: Object,
    formattingTokensRegExp?: RegExp
  },
  parse?: {
    units?: Object,
    parsers?: Object,
    parsingTokensRegExp?: RegExp
  }
}

declare module 'date-fns' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areRangesOverlapping (
    rangeLeft: Range,
    rangeRight: Range,
    options?: Options
  ): boolean
  namespace areRangesOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Locale
    }
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      addSuffix?: boolean,
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
      partialMethod?: 'floor' | 'ceil' | 'round',
      locale?: Locale
    }
  ): string
  namespace distanceInWordsStrict {}

  function eachDay (
    startDate: Date | string | number,
    endDate: Date | string | number,
    options?: Options
  ): Date[]
  namespace eachDay {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: {
      locale?: Locale
    }
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInRanges (
    rangeLeft: Range,
    rangeRight: Range,
    options?: Options
  ): number
  namespace getOverlappingDaysInRanges {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinRange (
    date: Date | string | number,
    range: Range,
    options?: Options
  ): boolean
  namespace isWithinRange {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: {
      locale?: Locale
    }
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace toDate {}
}

declare module 'date-fns/add_days' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_ranges_overlapping' {
  import {areRangesOverlapping} from 'date-fns'
  export = areRangesOverlapping
}

declare module 'date-fns/closest_index_to' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day' {
  import {eachDay} from 'date-fns'
  export = eachDay
}

declare module 'date-fns/end_of_day' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_ranges' {
  import {getOverlappingDaysInRanges} from 'date-fns'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/get_quarter' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_range' {
  import {isWithinRange} from 'date-fns'
  export = isWithinRange
}

declare module 'date-fns/last_day_of_iso_week' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/set_date' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/add_days/index' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours/index' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years/index' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds/index' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes/index' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months/index' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters/index' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds/index' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks/index' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years/index' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_ranges_overlapping/index' {
  import {areRangesOverlapping} from 'date-fns'
  export = areRangesOverlapping
}

declare module 'date-fns/closest_index_to/index' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to/index' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc/index' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc/index' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days/index' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years/index' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months/index' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years/index' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days/index' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours/index' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years/index' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes/index' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months/index' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters/index' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds/index' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks/index' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years/index' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words/index' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict/index' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day/index' {
  import {eachDay} from 'date-fns'
  export = eachDay
}

declare module 'date-fns/end_of_day/index' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour/index' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week/index' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year/index' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute/index' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month/index' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter/index' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second/index' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week/index' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year/index' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date/index' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day/index' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year/index' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month/index' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year/index' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours/index' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day/index' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week/index' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year/index' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year/index' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds/index' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes/index' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month/index' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_ranges/index' {
  import {getOverlappingDaysInRanges} from 'date-fns'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/get_quarter/index' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds/index' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time/index' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year/index' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after/index' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before/index' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date/index' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal/index' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month/index' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday/index' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month/index' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year/index' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday/index' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day/index' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour/index' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week/index' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year/index' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute/index' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month/index' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter/index' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second/index' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week/index' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year/index' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday/index' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday/index' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday/index' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday/index' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid/index' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday/index' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend/index' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_range/index' {
  import {isWithinRange} from 'date-fns'
  export = isWithinRange
}

declare module 'date-fns/last_day_of_iso_week/index' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year/index' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month/index' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter/index' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week/index' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year/index' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/set_date/index' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day/index' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year/index' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours/index' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day/index' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week/index' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year/index' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds/index' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes/index' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month/index' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter/index' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds/index' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year/index' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day/index' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour/index' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week/index' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year/index' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute/index' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month/index' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter/index' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second/index' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week/index' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year/index' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days/index' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours/index' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years/index' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds/index' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes/index' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months/index' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters/index' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds/index' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks/index' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years/index' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date/index' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/add_days/index.js' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/add_hours/index.js' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/add_iso_years/index.js' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/add_milliseconds/index.js' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/add_minutes/index.js' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/add_months/index.js' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/add_quarters/index.js' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/add_seconds/index.js' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/add_weeks/index.js' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/add_years/index.js' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/are_ranges_overlapping/index.js' {
  import {areRangesOverlapping} from 'date-fns'
  export = areRangesOverlapping
}

declare module 'date-fns/closest_index_to/index.js' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closest_to/index.js' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compare_asc/index.js' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compare_desc/index.js' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/difference_in_calendar_days/index.js' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/difference_in_calendar_iso_weeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/difference_in_calendar_iso_years/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/difference_in_calendar_months/index.js' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/difference_in_calendar_quarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/difference_in_calendar_weeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/difference_in_calendar_years/index.js' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/difference_in_days/index.js' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/difference_in_hours/index.js' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/difference_in_iso_years/index.js' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/difference_in_milliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/difference_in_minutes/index.js' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/difference_in_months/index.js' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/difference_in_quarters/index.js' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/difference_in_seconds/index.js' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/difference_in_weeks/index.js' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/difference_in_years/index.js' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distance_in_words/index.js' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distance_in_words_strict/index.js' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/each_day/index.js' {
  import {eachDay} from 'date-fns'
  export = eachDay
}

declare module 'date-fns/end_of_day/index.js' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/end_of_hour/index.js' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/end_of_iso_week/index.js' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/end_of_iso_year/index.js' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/end_of_minute/index.js' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/end_of_month/index.js' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/end_of_quarter/index.js' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/end_of_second/index.js' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/end_of_week/index.js' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/end_of_year/index.js' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index.js' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/get_date/index.js' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/get_day/index.js' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/get_day_of_year/index.js' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/get_days_in_month/index.js' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/get_days_in_year/index.js' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/get_hours/index.js' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/get_iso_day/index.js' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/get_iso_week/index.js' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/get_iso_weeks_in_year/index.js' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/get_iso_year/index.js' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/get_milliseconds/index.js' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/get_minutes/index.js' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/get_month/index.js' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/get_overlapping_days_in_ranges/index.js' {
  import {getOverlappingDaysInRanges} from 'date-fns'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/get_quarter/index.js' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/get_seconds/index.js' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/get_time/index.js' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/get_year/index.js' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/is_after/index.js' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/is_before/index.js' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/is_date/index.js' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/is_equal/index.js' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/is_first_day_of_month/index.js' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/is_friday/index.js' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/is_last_day_of_month/index.js' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/is_leap_year/index.js' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/is_monday/index.js' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/is_same_day/index.js' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/is_same_hour/index.js' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/is_same_iso_week/index.js' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/is_same_iso_year/index.js' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/is_same_minute/index.js' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/is_same_month/index.js' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/is_same_quarter/index.js' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/is_same_second/index.js' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/is_same_week/index.js' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/is_same_year/index.js' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/is_saturday/index.js' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/is_sunday/index.js' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/is_thursday/index.js' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/is_tuesday/index.js' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/is_valid/index.js' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/is_wednesday/index.js' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/is_weekend/index.js' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/is_within_range/index.js' {
  import {isWithinRange} from 'date-fns'
  export = isWithinRange
}

declare module 'date-fns/last_day_of_iso_week/index.js' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/last_day_of_iso_year/index.js' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/last_day_of_month/index.js' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/last_day_of_quarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/last_day_of_week/index.js' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/last_day_of_year/index.js' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index.js' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index.js' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index.js' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/set_date/index.js' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/set_day/index.js' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/set_day_of_year/index.js' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/set_hours/index.js' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/set_iso_day/index.js' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/set_iso_week/index.js' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/set_iso_year/index.js' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/set_milliseconds/index.js' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/set_minutes/index.js' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/set_month/index.js' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/set_quarter/index.js' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/set_seconds/index.js' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/set_year/index.js' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/start_of_day/index.js' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/start_of_hour/index.js' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/start_of_iso_week/index.js' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/start_of_iso_year/index.js' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/start_of_minute/index.js' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/start_of_month/index.js' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/start_of_quarter/index.js' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/start_of_second/index.js' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/start_of_week/index.js' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/start_of_year/index.js' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/sub_days/index.js' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/sub_hours/index.js' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/sub_iso_years/index.js' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/sub_milliseconds/index.js' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/sub_minutes/index.js' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/sub_months/index.js' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/sub_quarters/index.js' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/sub_seconds/index.js' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/sub_weeks/index.js' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/sub_years/index.js' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/to_date/index.js' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/fp' {
  let addDays: CurriedFn2<number, Date | string | number, Date>
  namespace addDays {}

  let addHours: CurriedFn2<number, Date | string | number, Date>
  namespace addHours {}

  let addISOYears: CurriedFn2<number, Date | string | number, Date>
  namespace addISOYears {}

  let addMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace addMilliseconds {}

  let addMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace addMinutes {}

  let addMonths: CurriedFn2<number, Date | string | number, Date>
  namespace addMonths {}

  let addQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace addQuarters {}

  let addSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace addSeconds {}

  let addWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace addWeeks {}

  let addYears: CurriedFn2<number, Date | string | number, Date>
  namespace addYears {}

  let areRangesOverlapping: CurriedFn2<Range, Range, boolean>
  namespace areRangesOverlapping {}

  let closestIndexTo: CurriedFn2<(Date | string | number)[], Date | string | number, number>
  namespace closestIndexTo {}

  let closestTo: CurriedFn2<(Date | string | number)[], Date | string | number, Date>
  namespace closestTo {}

  let compareAsc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareAsc {}

  let compareDesc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareDesc {}

  let differenceInCalendarDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDays {}

  let differenceInCalendarISOWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeks {}

  let differenceInCalendarISOYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOYears {}

  let differenceInCalendarMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonths {}

  let differenceInCalendarQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuarters {}

  let differenceInCalendarWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeks {}

  let differenceInCalendarYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYears {}

  let differenceInDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInDays {}

  let differenceInHours: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInHours {}

  let differenceInISOYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInISOYears {}

  let differenceInMilliseconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMilliseconds {}

  let differenceInMinutes: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMinutes {}

  let differenceInMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMonths {}

  let differenceInQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInQuarters {}

  let differenceInSeconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInSeconds {}

  let differenceInWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInWeeks {}

  let differenceInYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInYears {}

  let distanceInWords: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace distanceInWords {}

  let distanceInWordsStrict: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace distanceInWordsStrict {}

  let eachDay: CurriedFn2<Date | string | number, Date | string | number, Date[]>
  namespace eachDay {}

  let endOfDay: CurriedFn1<Date | string | number, Date>
  namespace endOfDay {}

  let endOfHour: CurriedFn1<Date | string | number, Date>
  namespace endOfHour {}

  let endOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeek {}

  let endOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace endOfISOYear {}

  let endOfMinute: CurriedFn1<Date | string | number, Date>
  namespace endOfMinute {}

  let endOfMonth: CurriedFn1<Date | string | number, Date>
  namespace endOfMonth {}

  let endOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace endOfQuarter {}

  let endOfSecond: CurriedFn1<Date | string | number, Date>
  namespace endOfSecond {}

  let endOfWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfWeek {}

  let endOfYear: CurriedFn1<Date | string | number, Date>
  namespace endOfYear {}

  let format: CurriedFn2<string, Date | string | number, string>
  namespace format {}

  let getDate: CurriedFn1<Date | string | number, number>
  namespace getDate {}

  let getDay: CurriedFn1<Date | string | number, number>
  namespace getDay {}

  let getDayOfYear: CurriedFn1<Date | string | number, number>
  namespace getDayOfYear {}

  let getDaysInMonth: CurriedFn1<Date | string | number, number>
  namespace getDaysInMonth {}

  let getDaysInYear: CurriedFn1<Date | string | number, number>
  namespace getDaysInYear {}

  let getHours: CurriedFn1<Date | string | number, number>
  namespace getHours {}

  let getISODay: CurriedFn1<Date | string | number, number>
  namespace getISODay {}

  let getISOWeek: CurriedFn1<Date | string | number, number>
  namespace getISOWeek {}

  let getISOWeeksInYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeeksInYear {}

  let getISOYear: CurriedFn1<Date | string | number, number>
  namespace getISOYear {}

  let getMilliseconds: CurriedFn1<Date | string | number, number>
  namespace getMilliseconds {}

  let getMinutes: CurriedFn1<Date | string | number, number>
  namespace getMinutes {}

  let getMonth: CurriedFn1<Date | string | number, number>
  namespace getMonth {}

  let getOverlappingDaysInRanges: CurriedFn2<Range, Range, number>
  namespace getOverlappingDaysInRanges {}

  let getQuarter: CurriedFn1<Date | string | number, number>
  namespace getQuarter {}

  let getSeconds: CurriedFn1<Date | string | number, number>
  namespace getSeconds {}

  let getTime: CurriedFn1<Date | string | number, number>
  namespace getTime {}

  let getYear: CurriedFn1<Date | string | number, number>
  namespace getYear {}

  let isAfter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isAfter {}

  let isBefore: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isBefore {}

  let isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  let isEqual: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isEqual {}

  let isFirstDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isFirstDayOfMonth {}

  let isFriday: CurriedFn1<Date | string | number, boolean>
  namespace isFriday {}

  let isLastDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isLastDayOfMonth {}

  let isLeapYear: CurriedFn1<Date | string | number, boolean>
  namespace isLeapYear {}

  let isMonday: CurriedFn1<Date | string | number, boolean>
  namespace isMonday {}

  let isSameDay: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameDay {}

  let isSameHour: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameHour {}

  let isSameISOWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeek {}

  let isSameISOYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOYear {}

  let isSameMinute: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMinute {}

  let isSameMonth: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMonth {}

  let isSameQuarter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameQuarter {}

  let isSameSecond: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameSecond {}

  let isSameWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameWeek {}

  let isSameYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameYear {}

  let isSaturday: CurriedFn1<Date | string | number, boolean>
  namespace isSaturday {}

  let isSunday: CurriedFn1<Date | string | number, boolean>
  namespace isSunday {}

  let isThursday: CurriedFn1<Date | string | number, boolean>
  namespace isThursday {}

  let isTuesday: CurriedFn1<Date | string | number, boolean>
  namespace isTuesday {}

  let isValid: CurriedFn1<Date, boolean>
  namespace isValid {}

  let isWednesday: CurriedFn1<Date | string | number, boolean>
  namespace isWednesday {}

  let isWeekend: CurriedFn1<Date | string | number, boolean>
  namespace isWeekend {}

  let isWithinRange: CurriedFn2<Range, Date | string | number, boolean>
  namespace isWithinRange {}

  let lastDayOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeek {}

  let lastDayOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOYear {}

  let lastDayOfMonth: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfMonth {}

  let lastDayOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfQuarter {}

  let lastDayOfWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfWeek {}

  let lastDayOfYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfYear {}

  let max: CurriedFn1<(Date | string | number)[], Date>
  namespace max {}

  let min: CurriedFn1<(Date | string | number)[], Date>
  namespace min {}

  let parse: CurriedFn3<Date | string | number, string, string, Date>
  namespace parse {}

  let setDate: CurriedFn2<number, Date | string | number, Date>
  namespace setDate {}

  let setDay: CurriedFn2<number, Date | string | number, Date>
  namespace setDay {}

  let setDayOfYear: CurriedFn2<number, Date | string | number, Date>
  namespace setDayOfYear {}

  let setHours: CurriedFn2<number, Date | string | number, Date>
  namespace setHours {}

  let setISODay: CurriedFn2<number, Date | string | number, Date>
  namespace setISODay {}

  let setISOWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeek {}

  let setISOYear: CurriedFn2<number, Date | string | number, Date>
  namespace setISOYear {}

  let setMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace setMilliseconds {}

  let setMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace setMinutes {}

  let setMonth: CurriedFn2<number, Date | string | number, Date>
  namespace setMonth {}

  let setQuarter: CurriedFn2<number, Date | string | number, Date>
  namespace setQuarter {}

  let setSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace setSeconds {}

  let setYear: CurriedFn2<number, Date | string | number, Date>
  namespace setYear {}

  let startOfDay: CurriedFn1<Date | string | number, Date>
  namespace startOfDay {}

  let startOfHour: CurriedFn1<Date | string | number, Date>
  namespace startOfHour {}

  let startOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeek {}

  let startOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace startOfISOYear {}

  let startOfMinute: CurriedFn1<Date | string | number, Date>
  namespace startOfMinute {}

  let startOfMonth: CurriedFn1<Date | string | number, Date>
  namespace startOfMonth {}

  let startOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace startOfQuarter {}

  let startOfSecond: CurriedFn1<Date | string | number, Date>
  namespace startOfSecond {}

  let startOfWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfWeek {}

  let startOfYear: CurriedFn1<Date | string | number, Date>
  namespace startOfYear {}

  let subDays: CurriedFn2<number, Date | string | number, Date>
  namespace subDays {}

  let subHours: CurriedFn2<number, Date | string | number, Date>
  namespace subHours {}

  let subISOYears: CurriedFn2<number, Date | string | number, Date>
  namespace subISOYears {}

  let subMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace subMilliseconds {}

  let subMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace subMinutes {}

  let subMonths: CurriedFn2<number, Date | string | number, Date>
  namespace subMonths {}

  let subQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace subQuarters {}

  let subSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace subSeconds {}

  let subWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace subWeeks {}

  let subYears: CurriedFn2<number, Date | string | number, Date>
  namespace subYears {}

  let toDate: CurriedFn1<Date | string | number, Date>
  namespace toDate {}

  let addDayswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addDayswithOptions {}

  let addHourswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addHourswithOptions {}

  let addISOYearswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addISOYearswithOptions {}

  let addMillisecondswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMillisecondswithOptions {}

  let addMinuteswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMinuteswithOptions {}

  let addMonthswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMonthswithOptions {}

  let addQuarterswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addQuarterswithOptions {}

  let addSecondswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addSecondswithOptions {}

  let addWeekswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addWeekswithOptions {}

  let addYearswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addYearswithOptions {}

  let areRangesOverlappingwithOptions: CurriedFn3<Options, Range, Range, boolean>
  namespace areRangesOverlappingwithOptions {}

  let closestIndexTowithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, number>
  namespace closestIndexTowithOptions {}

  let closestTowithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, Date>
  namespace closestTowithOptions {}

  let compareAscwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareAscwithOptions {}

  let compareDescwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareDescwithOptions {}

  let differenceInCalendarDayswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDayswithOptions {}

  let differenceInCalendarISOWeekswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeekswithOptions {}

  let differenceInCalendarISOYearswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOYearswithOptions {}

  let differenceInCalendarMonthswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonthswithOptions {}

  let differenceInCalendarQuarterswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuarterswithOptions {}

  let differenceInCalendarWeekswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeekswithOptions {}

  let differenceInCalendarYearswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYearswithOptions {}

  let differenceInDayswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInDayswithOptions {}

  let differenceInHourswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInHourswithOptions {}

  let differenceInISOYearswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInISOYearswithOptions {}

  let differenceInMillisecondswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMillisecondswithOptions {}

  let differenceInMinuteswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMinuteswithOptions {}

  let differenceInMonthswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMonthswithOptions {}

  let differenceInQuarterswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInQuarterswithOptions {}

  let differenceInSecondswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInSecondswithOptions {}

  let differenceInWeekswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInWeekswithOptions {}

  let differenceInYearswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInYearswithOptions {}

  let distanceInWordswithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace distanceInWordswithOptions {}

  let distanceInWordsStrictwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace distanceInWordsStrictwithOptions {}

  let eachDaywithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, Date[]>
  namespace eachDaywithOptions {}

  let endOfDaywithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfDaywithOptions {}

  let endOfHourwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfHourwithOptions {}

  let endOfISOWeekwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekwithOptions {}

  let endOfISOYearwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOYearwithOptions {}

  let endOfMinutewithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMinutewithOptions {}

  let endOfMonthwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMonthwithOptions {}

  let endOfQuarterwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfQuarterwithOptions {}

  let endOfSecondwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfSecondwithOptions {}

  let endOfWeekwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfWeekwithOptions {}

  let endOfYearwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfYearwithOptions {}

  let formatwithOptions: CurriedFn3<Options, string, Date | string | number, string>
  namespace formatwithOptions {}

  let getDatewithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDatewithOptions {}

  let getDaywithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaywithOptions {}

  let getDayOfYearwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayOfYearwithOptions {}

  let getDaysInMonthwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInMonthwithOptions {}

  let getDaysInYearwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInYearwithOptions {}

  let getHourswithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getHourswithOptions {}

  let getISODaywithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISODaywithOptions {}

  let getISOWeekwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekwithOptions {}

  let getISOWeeksInYearwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeeksInYearwithOptions {}

  let getISOYearwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOYearwithOptions {}

  let getMillisecondswithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMillisecondswithOptions {}

  let getMinuteswithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMinuteswithOptions {}

  let getMonthwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMonthwithOptions {}

  let getOverlappingDaysInRangeswithOptions: CurriedFn3<Options, Range, Range, number>
  namespace getOverlappingDaysInRangeswithOptions {}

  let getQuarterwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getQuarterwithOptions {}

  let getSecondswithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getSecondswithOptions {}

  let getTimewithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getTimewithOptions {}

  let getYearwithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getYearwithOptions {}

  let isAfterwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isAfterwithOptions {}

  let isBeforewithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isBeforewithOptions {}

  let isDatewithOptions: CurriedFn2<Options, any, boolean>
  namespace isDatewithOptions {}

  let isEqualwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isEqualwithOptions {}

  let isFirstDayOfMonthwithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFirstDayOfMonthwithOptions {}

  let isFridaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFridaywithOptions {}

  let isLastDayOfMonthwithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLastDayOfMonthwithOptions {}

  let isLeapYearwithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLeapYearwithOptions {}

  let isMondaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isMondaywithOptions {}

  let isSameDaywithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameDaywithOptions {}

  let isSameHourwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameHourwithOptions {}

  let isSameISOWeekwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekwithOptions {}

  let isSameISOYearwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOYearwithOptions {}

  let isSameMinutewithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMinutewithOptions {}

  let isSameMonthwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMonthwithOptions {}

  let isSameQuarterwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameQuarterwithOptions {}

  let isSameSecondwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameSecondwithOptions {}

  let isSameWeekwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameWeekwithOptions {}

  let isSameYearwithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameYearwithOptions {}

  let isSaturdaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSaturdaywithOptions {}

  let isSundaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSundaywithOptions {}

  let isThursdaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isThursdaywithOptions {}

  let isTuesdaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isTuesdaywithOptions {}

  let isValidwithOptions: CurriedFn2<Options, Date, boolean>
  namespace isValidwithOptions {}

  let isWednesdaywithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWednesdaywithOptions {}

  let isWeekendwithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWeekendwithOptions {}

  let isWithinRangewithOptions: CurriedFn3<Options, Range, Date | string | number, boolean>
  namespace isWithinRangewithOptions {}

  let lastDayOfISOWeekwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekwithOptions {}

  let lastDayOfISOYearwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOYearwithOptions {}

  let lastDayOfMonthwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfMonthwithOptions {}

  let lastDayOfQuarterwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfQuarterwithOptions {}

  let lastDayOfWeekwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfWeekwithOptions {}

  let lastDayOfYearwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfYearwithOptions {}

  let maxwithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace maxwithOptions {}

  let minwithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace minwithOptions {}

  let parsewithOptions: CurriedFn4<Object, Date | string | number, string, string, Date>
  namespace parsewithOptions {}

  let setDatewithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDatewithOptions {}

  let setDaywithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDaywithOptions {}

  let setDayOfYearwithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayOfYearwithOptions {}

  let setHourswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setHourswithOptions {}

  let setISODaywithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISODaywithOptions {}

  let setISOWeekwithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekwithOptions {}

  let setISOYearwithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOYearwithOptions {}

  let setMillisecondswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMillisecondswithOptions {}

  let setMinuteswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMinuteswithOptions {}

  let setMonthwithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMonthwithOptions {}

  let setQuarterwithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setQuarterwithOptions {}

  let setSecondswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setSecondswithOptions {}

  let setYearwithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setYearwithOptions {}

  let startOfDaywithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfDaywithOptions {}

  let startOfHourwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfHourwithOptions {}

  let startOfISOWeekwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekwithOptions {}

  let startOfISOYearwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOYearwithOptions {}

  let startOfMinutewithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMinutewithOptions {}

  let startOfMonthwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMonthwithOptions {}

  let startOfQuarterwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfQuarterwithOptions {}

  let startOfSecondwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfSecondwithOptions {}

  let startOfWeekwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekwithOptions {}

  let startOfYearwithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfYearwithOptions {}

  let subDayswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subDayswithOptions {}

  let subHourswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subHourswithOptions {}

  let subISOYearswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subISOYearswithOptions {}

  let subMillisecondswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMillisecondswithOptions {}

  let subMinuteswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMinuteswithOptions {}

  let subMonthswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMonthswithOptions {}

  let subQuarterswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subQuarterswithOptions {}

  let subSecondswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subSecondswithOptions {}

  let subWeekswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subWeekswithOptions {}

  let subYearswithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subYearswithOptions {}

  let toDatewithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace toDatewithOptions {}
}

declare module 'date-fns/fp/addDays' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlapping' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDay' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDay' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRanges' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarter' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRange' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDays/index' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears/index' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlapping/index' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords/index' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDay/index' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDay/index' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour/index' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear/index' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate/index' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours/index' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear/index' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRanges/index' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarter/index' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear/index' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear/index' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRange/index' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max/index' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate/index' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours/index' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear/index' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear/index' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour/index' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear/index' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears/index' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDays/index.js' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index.js' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears/index.js' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index.js' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index.js' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlapping/index.js' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index.js' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDay/index.js' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index.js' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate/index.js' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index.js' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours/index.js' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index.js' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear/index.js' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index.js' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRanges/index.js' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index.js' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear/index.js' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index.js' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index.js' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index.js' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index.js' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index.js' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index.js' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index.js' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index.js' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index.js' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRange/index.js' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max/index.js' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index.js' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index.js' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate/index.js' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index.js' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours/index.js' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index.js' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear/index.js' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index.js' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear/index.js' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index.js' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index.js' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears/index.js' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index.js' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index.js' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index.js' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDayswithOptions' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHourswithOptions' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYearswithOptions' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMillisecondswithOptions' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinuteswithOptions' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonthswithOptions' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarterswithOptions' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSecondswithOptions' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeekswithOptions' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYearswithOptions' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlappingwithOptions' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTowithOptions' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTowithOptions' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAscwithOptions' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDescwithOptions' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDayswithOptions' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeekswithOptions' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYearswithOptions' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonthswithOptions' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarterswithOptions' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeekswithOptions' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYearswithOptions' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDayswithOptions' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHourswithOptions' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYearswithOptions' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMillisecondswithOptions' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinuteswithOptions' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonthswithOptions' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarterswithOptions' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSecondswithOptions' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeekswithOptions' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYearswithOptions' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWordswithOptions' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrictwithOptions' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDaywithOptions' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDaywithOptions' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHourwithOptions' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeekwithOptions' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYearwithOptions' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinutewithOptions' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonthwithOptions' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarterwithOptions' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecondwithOptions' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeekwithOptions' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYearwithOptions' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/formatwithOptions' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDatewithOptions' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDaywithOptions' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYearwithOptions' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonthwithOptions' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYearwithOptions' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHourswithOptions' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODaywithOptions' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeekwithOptions' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYearwithOptions' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYearwithOptions' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMillisecondswithOptions' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinuteswithOptions' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonthwithOptions' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRangeswithOptions' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarterwithOptions' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSecondswithOptions' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTimewithOptions' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYearwithOptions' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfterwithOptions' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBeforewithOptions' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDatewithOptions' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqualwithOptions' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonthwithOptions' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFridaywithOptions' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonthwithOptions' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYearwithOptions' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMondaywithOptions' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDaywithOptions' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHourwithOptions' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeekwithOptions' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYearwithOptions' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinutewithOptions' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonthwithOptions' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarterwithOptions' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecondwithOptions' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeekwithOptions' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYearwithOptions' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturdaywithOptions' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSundaywithOptions' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursdaywithOptions' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesdaywithOptions' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValidwithOptions' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesdaywithOptions' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekendwithOptions' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRangewithOptions' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeekwithOptions' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYearwithOptions' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonthwithOptions' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarterwithOptions' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeekwithOptions' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYearwithOptions' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/maxwithOptions' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/minwithOptions' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parsewithOptions' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDatewithOptions' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDaywithOptions' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYearwithOptions' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHourswithOptions' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODaywithOptions' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeekwithOptions' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYearwithOptions' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMillisecondswithOptions' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinuteswithOptions' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonthwithOptions' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarterwithOptions' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSecondswithOptions' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYearwithOptions' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDaywithOptions' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHourwithOptions' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeekwithOptions' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYearwithOptions' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinutewithOptions' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonthwithOptions' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarterwithOptions' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecondwithOptions' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeekwithOptions' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYearwithOptions' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDayswithOptions' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHourswithOptions' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYearswithOptions' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMillisecondswithOptions' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinuteswithOptions' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonthswithOptions' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarterswithOptions' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSecondswithOptions' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeekswithOptions' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYearswithOptions' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDatewithOptions' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDayswithOptions/index' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHourswithOptions/index' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYearswithOptions/index' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMillisecondswithOptions/index' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinuteswithOptions/index' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonthswithOptions/index' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarterswithOptions/index' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSecondswithOptions/index' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeekswithOptions/index' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYearswithOptions/index' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlappingwithOptions/index' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTowithOptions/index' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTowithOptions/index' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAscwithOptions/index' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDescwithOptions/index' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDayswithOptions/index' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeekswithOptions/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYearswithOptions/index' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonthswithOptions/index' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarterswithOptions/index' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeekswithOptions/index' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYearswithOptions/index' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDayswithOptions/index' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHourswithOptions/index' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYearswithOptions/index' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMillisecondswithOptions/index' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinuteswithOptions/index' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonthswithOptions/index' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarterswithOptions/index' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSecondswithOptions/index' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeekswithOptions/index' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYearswithOptions/index' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWordswithOptions/index' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrictwithOptions/index' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDaywithOptions/index' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDaywithOptions/index' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHourwithOptions/index' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeekwithOptions/index' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYearwithOptions/index' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinutewithOptions/index' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonthwithOptions/index' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarterwithOptions/index' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecondwithOptions/index' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeekwithOptions/index' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYearwithOptions/index' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/formatwithOptions/index' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDatewithOptions/index' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDaywithOptions/index' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYearwithOptions/index' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonthwithOptions/index' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYearwithOptions/index' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHourswithOptions/index' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODaywithOptions/index' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeekwithOptions/index' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYearwithOptions/index' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYearwithOptions/index' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMillisecondswithOptions/index' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinuteswithOptions/index' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonthwithOptions/index' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRangeswithOptions/index' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarterwithOptions/index' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSecondswithOptions/index' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTimewithOptions/index' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYearwithOptions/index' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfterwithOptions/index' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBeforewithOptions/index' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDatewithOptions/index' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqualwithOptions/index' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonthwithOptions/index' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFridaywithOptions/index' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonthwithOptions/index' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYearwithOptions/index' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMondaywithOptions/index' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDaywithOptions/index' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHourwithOptions/index' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeekwithOptions/index' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYearwithOptions/index' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinutewithOptions/index' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonthwithOptions/index' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarterwithOptions/index' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecondwithOptions/index' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeekwithOptions/index' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYearwithOptions/index' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturdaywithOptions/index' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSundaywithOptions/index' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursdaywithOptions/index' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesdaywithOptions/index' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValidwithOptions/index' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesdaywithOptions/index' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekendwithOptions/index' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRangewithOptions/index' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeekwithOptions/index' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYearwithOptions/index' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonthwithOptions/index' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarterwithOptions/index' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeekwithOptions/index' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYearwithOptions/index' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/maxwithOptions/index' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/minwithOptions/index' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parsewithOptions/index' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDatewithOptions/index' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDaywithOptions/index' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYearwithOptions/index' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHourswithOptions/index' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODaywithOptions/index' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeekwithOptions/index' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYearwithOptions/index' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMillisecondswithOptions/index' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinuteswithOptions/index' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonthwithOptions/index' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarterwithOptions/index' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSecondswithOptions/index' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYearwithOptions/index' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDaywithOptions/index' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHourwithOptions/index' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeekwithOptions/index' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYearwithOptions/index' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinutewithOptions/index' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonthwithOptions/index' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarterwithOptions/index' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecondwithOptions/index' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeekwithOptions/index' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYearwithOptions/index' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDayswithOptions/index' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHourswithOptions/index' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYearswithOptions/index' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMillisecondswithOptions/index' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinuteswithOptions/index' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonthswithOptions/index' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarterswithOptions/index' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSecondswithOptions/index' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeekswithOptions/index' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYearswithOptions/index' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDatewithOptions/index' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDayswithOptions/index.js' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHourswithOptions/index.js' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYearswithOptions/index.js' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMillisecondswithOptions/index.js' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinuteswithOptions/index.js' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonthswithOptions/index.js' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarterswithOptions/index.js' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSecondswithOptions/index.js' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeekswithOptions/index.js' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYearswithOptions/index.js' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areRangesOverlappingwithOptions/index.js' {
  import {areRangesOverlapping} from 'date-fns/fp'
  export = areRangesOverlapping
}

declare module 'date-fns/fp/closestIndexTowithOptions/index.js' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTowithOptions/index.js' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAscwithOptions/index.js' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDescwithOptions/index.js' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDayswithOptions/index.js' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeekswithOptions/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYearswithOptions/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonthswithOptions/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarterswithOptions/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeekswithOptions/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYearswithOptions/index.js' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDayswithOptions/index.js' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHourswithOptions/index.js' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYearswithOptions/index.js' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMillisecondswithOptions/index.js' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinuteswithOptions/index.js' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonthswithOptions/index.js' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarterswithOptions/index.js' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSecondswithOptions/index.js' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeekswithOptions/index.js' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYearswithOptions/index.js' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWordswithOptions/index.js' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrictwithOptions/index.js' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDaywithOptions/index.js' {
  import {eachDay} from 'date-fns/fp'
  export = eachDay
}

declare module 'date-fns/fp/endOfDaywithOptions/index.js' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHourwithOptions/index.js' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeekwithOptions/index.js' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYearwithOptions/index.js' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinutewithOptions/index.js' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonthwithOptions/index.js' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarterwithOptions/index.js' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecondwithOptions/index.js' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeekwithOptions/index.js' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYearwithOptions/index.js' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/formatwithOptions/index.js' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDatewithOptions/index.js' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDaywithOptions/index.js' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYearwithOptions/index.js' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonthwithOptions/index.js' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYearwithOptions/index.js' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHourswithOptions/index.js' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODaywithOptions/index.js' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeekwithOptions/index.js' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYearwithOptions/index.js' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYearwithOptions/index.js' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMillisecondswithOptions/index.js' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinuteswithOptions/index.js' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonthwithOptions/index.js' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInRangeswithOptions/index.js' {
  import {getOverlappingDaysInRanges} from 'date-fns/fp'
  export = getOverlappingDaysInRanges
}

declare module 'date-fns/fp/getQuarterwithOptions/index.js' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSecondswithOptions/index.js' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTimewithOptions/index.js' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYearwithOptions/index.js' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfterwithOptions/index.js' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBeforewithOptions/index.js' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDatewithOptions/index.js' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqualwithOptions/index.js' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonthwithOptions/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFridaywithOptions/index.js' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonthwithOptions/index.js' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYearwithOptions/index.js' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMondaywithOptions/index.js' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDaywithOptions/index.js' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHourwithOptions/index.js' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeekwithOptions/index.js' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYearwithOptions/index.js' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinutewithOptions/index.js' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonthwithOptions/index.js' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarterwithOptions/index.js' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecondwithOptions/index.js' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeekwithOptions/index.js' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYearwithOptions/index.js' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturdaywithOptions/index.js' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSundaywithOptions/index.js' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursdaywithOptions/index.js' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesdaywithOptions/index.js' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValidwithOptions/index.js' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesdaywithOptions/index.js' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekendwithOptions/index.js' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinRangewithOptions/index.js' {
  import {isWithinRange} from 'date-fns/fp'
  export = isWithinRange
}

declare module 'date-fns/fp/lastDayOfISOWeekwithOptions/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYearwithOptions/index.js' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonthwithOptions/index.js' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarterwithOptions/index.js' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeekwithOptions/index.js' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYearwithOptions/index.js' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/maxwithOptions/index.js' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/minwithOptions/index.js' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parsewithOptions/index.js' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDatewithOptions/index.js' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDaywithOptions/index.js' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYearwithOptions/index.js' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHourswithOptions/index.js' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODaywithOptions/index.js' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeekwithOptions/index.js' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYearwithOptions/index.js' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMillisecondswithOptions/index.js' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinuteswithOptions/index.js' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonthwithOptions/index.js' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarterwithOptions/index.js' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSecondswithOptions/index.js' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYearwithOptions/index.js' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDaywithOptions/index.js' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHourwithOptions/index.js' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeekwithOptions/index.js' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYearwithOptions/index.js' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinutewithOptions/index.js' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonthwithOptions/index.js' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarterwithOptions/index.js' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecondwithOptions/index.js' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeekwithOptions/index.js' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYearwithOptions/index.js' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDayswithOptions/index.js' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHourswithOptions/index.js' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYearswithOptions/index.js' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMillisecondswithOptions/index.js' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinuteswithOptions/index.js' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonthswithOptions/index.js' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarterswithOptions/index.js' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSecondswithOptions/index.js' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeekswithOptions/index.js' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYearswithOptions/index.js' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDatewithOptions/index.js' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/locale/ar' {}
declare module 'date-fns/locale/bg' {}
declare module 'date-fns/locale/ca' {}
declare module 'date-fns/locale/cs' {}
declare module 'date-fns/locale/da' {}
declare module 'date-fns/locale/de' {}
declare module 'date-fns/locale/el' {}
declare module 'date-fns/locale/en' {}
declare module 'date-fns/locale/eo' {}
declare module 'date-fns/locale/es' {}
declare module 'date-fns/locale/fi' {}
declare module 'date-fns/locale/fil' {}
declare module 'date-fns/locale/fr' {}
declare module 'date-fns/locale/hr' {}
declare module 'date-fns/locale/id' {}
declare module 'date-fns/locale/is' {}
declare module 'date-fns/locale/it' {}
declare module 'date-fns/locale/ja' {}
declare module 'date-fns/locale/ko' {}
declare module 'date-fns/locale/mk' {}
declare module 'date-fns/locale/nb' {}
declare module 'date-fns/locale/nl' {}
declare module 'date-fns/locale/pl' {}
declare module 'date-fns/locale/pt' {}
declare module 'date-fns/locale/ru' {}
declare module 'date-fns/locale/sk' {}
declare module 'date-fns/locale/sv' {}
declare module 'date-fns/locale/th' {}
declare module 'date-fns/locale/tr' {}
declare module 'date-fns/locale/zh_cn' {}
declare module 'date-fns/locale/zh_tw' {}
declare module 'date-fns/locale/ar/index' {}
declare module 'date-fns/locale/bg/index' {}
declare module 'date-fns/locale/ca/index' {}
declare module 'date-fns/locale/cs/index' {}
declare module 'date-fns/locale/da/index' {}
declare module 'date-fns/locale/de/index' {}
declare module 'date-fns/locale/el/index' {}
declare module 'date-fns/locale/en/index' {}
declare module 'date-fns/locale/eo/index' {}
declare module 'date-fns/locale/es/index' {}
declare module 'date-fns/locale/fi/index' {}
declare module 'date-fns/locale/fil/index' {}
declare module 'date-fns/locale/fr/index' {}
declare module 'date-fns/locale/hr/index' {}
declare module 'date-fns/locale/id/index' {}
declare module 'date-fns/locale/is/index' {}
declare module 'date-fns/locale/it/index' {}
declare module 'date-fns/locale/ja/index' {}
declare module 'date-fns/locale/ko/index' {}
declare module 'date-fns/locale/mk/index' {}
declare module 'date-fns/locale/nb/index' {}
declare module 'date-fns/locale/nl/index' {}
declare module 'date-fns/locale/pl/index' {}
declare module 'date-fns/locale/pt/index' {}
declare module 'date-fns/locale/ru/index' {}
declare module 'date-fns/locale/sk/index' {}
declare module 'date-fns/locale/sv/index' {}
declare module 'date-fns/locale/th/index' {}
declare module 'date-fns/locale/tr/index' {}
declare module 'date-fns/locale/zh_cn/index' {}
declare module 'date-fns/locale/zh_tw/index' {}
declare module 'date-fns/locale/ar/index.js' {}
declare module 'date-fns/locale/bg/index.js' {}
declare module 'date-fns/locale/ca/index.js' {}
declare module 'date-fns/locale/cs/index.js' {}
declare module 'date-fns/locale/da/index.js' {}
declare module 'date-fns/locale/de/index.js' {}
declare module 'date-fns/locale/el/index.js' {}
declare module 'date-fns/locale/en/index.js' {}
declare module 'date-fns/locale/eo/index.js' {}
declare module 'date-fns/locale/es/index.js' {}
declare module 'date-fns/locale/fi/index.js' {}
declare module 'date-fns/locale/fil/index.js' {}
declare module 'date-fns/locale/fr/index.js' {}
declare module 'date-fns/locale/hr/index.js' {}
declare module 'date-fns/locale/id/index.js' {}
declare module 'date-fns/locale/is/index.js' {}
declare module 'date-fns/locale/it/index.js' {}
declare module 'date-fns/locale/ja/index.js' {}
declare module 'date-fns/locale/ko/index.js' {}
declare module 'date-fns/locale/mk/index.js' {}
declare module 'date-fns/locale/nb/index.js' {}
declare module 'date-fns/locale/nl/index.js' {}
declare module 'date-fns/locale/pl/index.js' {}
declare module 'date-fns/locale/pt/index.js' {}
declare module 'date-fns/locale/ru/index.js' {}
declare module 'date-fns/locale/sk/index.js' {}
declare module 'date-fns/locale/sv/index.js' {}
declare module 'date-fns/locale/th/index.js' {}
declare module 'date-fns/locale/tr/index.js' {}
declare module 'date-fns/locale/zh_cn/index.js' {}
declare module 'date-fns/locale/zh_tw/index.js' {}
