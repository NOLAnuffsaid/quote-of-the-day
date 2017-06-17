/**
 * Created by widner on 6/17/17.
 */
const resolve =  require('path').resolve

module.exports = {
  entry: {
    source: resolve(/*Replace with a path*/),
    dependencies: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    path: '', /*Replace with a path*/
    publicPath: '', /*Replace with a path*/
    filename: '' /*Replace with a filename*/
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
      utils: '', /*Replace with a path to utitls*/
      components: '', /*Replace with a path to components */
      reducers: '', /*Replace with a path to reducers*/
      constants: '' /*Replace with a path to constants*/
    }
  }
}
