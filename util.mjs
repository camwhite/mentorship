import chalk from 'chalk'
import util from 'util'

export const logger = (log, color=null) => {
  if (color) {
    console.log(chalk[color](log + '\n\n'))
  } else {
    const { inspect } = util
    const inspection = inspect(log)
    console.log(`${inspection}\n\n`)
  }
}
