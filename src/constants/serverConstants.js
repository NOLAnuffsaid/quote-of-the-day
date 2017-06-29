/**
 * Created by widner on 6/20/17.
 */
var resolve = require('path').resolve

const CWD = process.cwd()

var BUILD_DIR = resolve(CWD, 'build')
var SRC_DIR = resolve(CWD, 'src')
var ENV = process.env.NODE_ENV || 'prod'

module.exports = {
  BUILD_DIR,
  SRC_DIR,
  ENV
}