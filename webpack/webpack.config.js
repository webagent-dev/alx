const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVar) => {
const { env } = envVar
const envConfig = require(`./webpack.${env}.js`)
const mainConfig = merge(commonConfig, envConfig)
return mainConfig
}