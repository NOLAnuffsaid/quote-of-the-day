/**
 * Created by widner on 6/21/17.
 */
const {ENV} = require('../constants/serverConstants')

const portTable = {
  'dev': 3001,
  'test': 8080,
  'prod': 4567
}

module.exports.setPort = () => portTable[ENV]

