'use strict';

const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pp = require('../package');

const banner = [
  pp.name + ' v' + pp.version,
  '(c) ' + new Date().getFullYear() + ' ' + pp.author,
  pp.homepage
].join('\n');

const env = config.npm.env

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  output: {
    path: path.join(config.npm.assetsRoot),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'test',
    umdNamedDefine: true
  },

  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    }, true)
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSPlugin({})
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[name].min.css'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.BannerPlugin(banner),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})

webpackConfig.entry = {
  '{{ name }}': './src/index.ts'
}

module.exports = webpackConfig
