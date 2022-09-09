const BundleAnalyzerplugin = require('webpack-bundle-analyzer')
.BundleAnalyzerPlugin
module.exports = {
    mode: 'production',
    devtools: 'source-map',
    Plugins:[
        new BundleAnalyzerplugin()
    ]
}