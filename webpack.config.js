const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    script: './script.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './script.js'
  },
  module: {rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]},
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: false
    })
  ]
};
