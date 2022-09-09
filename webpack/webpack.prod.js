const BundleAnalyzerplugin = require('webpack-bundle-analyzer')
.BundleAnalyzerPlugin
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    Plugins:[
        new BundleAnalyzerplugin()
    ]
}