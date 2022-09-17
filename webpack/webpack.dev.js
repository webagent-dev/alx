const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports =
  {
    mode: "development",
    devServer:
      {
        port: 3000,
        static:
          [
            "./public",
          ],
        open: true,
        hot: true,
        liveReload: true,
      },
    devtool:
      "cheap-module-source-map",
    plugins:
      [
        new ReactRefreshWebpackPlugin(),
      ],
  }