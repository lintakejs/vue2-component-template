const path = require('path')
// const pp = require('../package')

module.exports = {
  dev: {
    env: require('./dev.env'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    port: process.env.PORT || 3000,
    autoOpenBrowser: true,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    cssSourceMap: false
  },
  build: {
    env: require('./prod.env'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    assetsRoot: path.resolve(__dirname, '../dist'),
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
