const path = require('path')
const merge = require('webpack-merge')
const common = require('../webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist')
  },
  watch: true,
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
})
