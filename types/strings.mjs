import fs from 'fs'
import logger from '../util'

/**
 * Strings are a type of variable.
 * They are signified by qutoes or backticks.
 * They can contain any utf-8 character.
 */

export default (async () => {

  // Our first string is the focus of this file

  const str = 'this is example string 1' // our first string
  logger(str, 'green') // prints contents of str

  // All strings have properties available like length

  const { length } = str // the strings length
  logger(length, 'red') // prints 24

  // Don't worry about this too much yet it's a bonus 
  // but if you can take note do it!

  const { promises: { readFile }} = fs // nested destructuring syntax
  const file = await readFile('index.mjs') // await the readFile promise
  logger(file.toString(), 'yellow') // prints file contents

})()