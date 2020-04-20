const path = require('path')
// const pp = require('../package')

module.exports = {
  dev: {
    env: require('./dev.env'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    useEslint: true,
    showEslintErrorsInOverlay: false,
    cssSourceMap: false
  },
  build: {
    env: require('./prod.env'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    assetsRoot: path.resolve(__dirname, '../dist'),
    index: path.resolve(__dirname, '../dist/index.html'),
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  npm: {
    env: require('./npm.env'),
    assetsRoot: path.resolve(__dirname, '../lib'),
    productionSourceMap: true
  }
}
