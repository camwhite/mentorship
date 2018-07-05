import fs from 'fs'
import { logger } from '../util'

/**
 * Strings are a type of variable.
 * They are signified by qutoes or backticks.
 * They can contain any utf-8 character.
 */

export default (async () => {

  // Our first string is the focus of this file
  const str = 'this is an example string' // our first string
  logger(str, 'green') // prints contents of str

  // All strings have properties available like length
  const { length } = str // the string's length cast into a variable
  logger(length, 'red') // prints 25

  // Some of these properties are functions called methods
  const [ firstChar ] = str.split('') // extract first character
  const repeated = firstChar.repeat(length) // repeat the first character
  logger(repeated, 'blue') // prints 25 t's

  // Strings surrounded by backticks can be interpolated and multi-line
  const interpolated = `
  This is a combination of all variables above it
  Our first string: ${str}
  Its length: ${length}
  The first character: ${firstChar}
  The repeated value: ${repeated}
  `.trim()
  logger(interpolated, 'cyan')


  // Don't worry about this too much yet it's a bonus 
  // but take note of it!
  const { promises: { readFile }} = fs // nested destructuring syntax
  const file = await readFile('index.mjs') // await the readFile promise
  logger(file.toString(), 'yellow') // prints file contents

})()
