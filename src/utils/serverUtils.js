/**
 * Created by widner on 6/20/17.
 */
var exec = require('child_process').exec
var resolve = require('path').resolve

const {BUILD_DIR} = require('../constants/serverConstants')

var cleanup = (dir) => (evt) => {
  let PID = process.pid
  exec(`rm -rf ${dir}/*`, (e, so, se) => {
    let exitCode = 0
    if (e) {
      exitCode = 1
      console.log(se.toString())
    }
    process.kill(PID)
    process.exit(exitCode)
  })
}

var registerExitListeners = (dir) => {
  let cleaner = cleanup(dir)
  process.on('SIGINT', cleaner.bind(null))
  process.on('kill', cleaner.bind(null))
}


module.exports = {
  cleanup,
  registerExitListeners
}
