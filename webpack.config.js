const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const ga = argv.mode === 'production' ? './index-google.html' : 'index.html';
  return {
    entry: {
      script: './script.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './script.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: ga,
        filename: ga,
        inject: true
      })
    ]
  }
}