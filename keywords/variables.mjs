import { logger } from '../util'

/**
 * Variables are a way to store and manipulate different types of values.
 * Variables are always assinged on the right-hand side of an equals sign
 * and named on the left. Variables are camel cased.
 */

export default (async () => {

  // Variables can be of any type
  const x = 'assignment' // a variable named x
  const y = [ x, x ]
  const z = { x, y }
  logger(z) // prints string of assignment

})()
