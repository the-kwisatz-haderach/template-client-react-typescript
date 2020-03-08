const path = require('path')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const merge = require('webpack-merge')
const common = require('../webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../', 'build')
  },
  plugins: [
    new MinifyPlugin(
      {},
      {
        test: /\.(j|t)s($|\?)/i
      }
    )
  ]
})
