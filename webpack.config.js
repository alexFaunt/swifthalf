/* eslint-disable import/no-extraneous-dependencies, import/no-dynamic-require */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const isProduction = process.env.NODE_ENV === 'production'

const commonConfig = {
  target: 'web',
  entry: './app/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    })
  ]
}

const prodConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
const devConfig = {
  watch: true,
  devServer: {
    stats: { colors: true, progress: true, chunks: false },
    proxy: {
      '/': {
        target: 'http://localhost:3000' // TODO port from env
      }
    }
  }
}

module.exports = merge(commonConfig, isProduction ? prodConfig : devConfig)
