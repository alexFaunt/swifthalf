/* eslint-disable import/no-extraneous-dependencies, import/no-dynamic-require */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// TODO asset caching
const isProduction = ['production', 'analyze'].includes(process.env.NODE_ENV)
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
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'file-loader?name=./images/[name].[ext]'
      },
      {
        test: /\.ico$/,
        use: 'file-loader?name=./[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${isProduction ? 'production' : 'development'}"`
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
    hot: false,
    stats: { colors: true, progress: true, chunks: false },
    proxy: {
      '/': {
        target: 'http://localhost:3000' // TODO port from env
      }
    }
  }
}

const analyzeConfig = {
  plugins: [new BundleAnalyzerPlugin()]
}

const config = [commonConfig, isProduction ? prodConfig : devConfig]
if (process.env.NODE_ENV === 'analyze') config.push(analyzeConfig)

module.exports = merge(...config)
