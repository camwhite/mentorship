import chalk from 'chalk'

export const logger = (log, color=null) => {
  if (color) {
    console.log(chalk[color](log + '\n\n'))
  } else {
    console.log(log + '\n\n')
  }
}
