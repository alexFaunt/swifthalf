/* eslint-disable import/no-extraneous-dependencies, import/no-dynamic-require */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// TODO asset caching
const isProduction = process.env.NODE_ENV === 'production'
const commonConfig = {
  target: 'web',
  entry: './client/index.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          `css-loader?${isProduction ? 'minimize=true' : ''}!postcss-loader`
        )
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true
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
