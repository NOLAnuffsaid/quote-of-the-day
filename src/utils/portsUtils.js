/**
 * Created by widner on 6/21/17.
 */
const {ENV} = require('../constants/serverConstants')

const portDict = {
  'dev': 3001,
  'test': 8080,
  'prod': 4567
}

module.exports.getPort = () => portDict[ENV]

