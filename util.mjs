import chalk from 'chalk'

const logger = (log, color=null) => {
  if (color) {
    console.log(chalk[color](log))
  } else {
    console.log(log)
  }
}

export default logger
