const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    script: './script.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './script.js'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
            'babel-loader',
            {
                loader: 'awesome-typescript-loader'
            }
        ],
        exclude: [/node_modules/]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
};
