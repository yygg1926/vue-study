var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            "css-loader"
          ]// loader의 순서도 시스템에 영향을 준다.
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}