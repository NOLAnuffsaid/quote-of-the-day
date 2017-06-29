/**
 * Created by widner on 6/17/17.
 */
const resolve =  require('path').resolve
const {BUILD_DIR, SRC_DIR, ENV} = require('./src/constants/serverConstants')

module.exports = {
  entry: {
    bundle: resolve(SRC_DIR, 'index.js'),
    vendors: ['react', 'react-dom', 'redux', 'react-redux', 'prop-types',  'ramda', 'immutable']
  },
  output: {
    path: BUILD_DIR, /*Replace with a path*/
    //publicPath: '', /*Replace with a path*/
    filename: ENV + '_build-' + Date.now().toString() + '-[name].js' /*Replace with a filename*/
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['react', 'es2015'] }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      utils: resolve(SRC_DIR, 'utils'), /*Replace with a path to utitls*/
      components: resolve(SRC_DIR, 'components'), /*Replace with a path to components */
      reducers: resolve(SRC_DIR, 'reducers'), /*Replace with a path to reducers*/
      constants: resolve(SRC_DIR, 'constants') /*Replace with a path to constants*/
    }
  }
}
