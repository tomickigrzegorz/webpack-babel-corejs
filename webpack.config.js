const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
    devtool: argv.mode === 'production' ? 'none' : 'source-map',
    mode: argv.mode === 'production' ? 'production' : 'development',
    entry: {
      MYSCRIPT: './sources/script.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: './[name].js',
      library: '[name]',
      libraryTarget: 'var',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true
      }),
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: './sources/index.html'
      })
    ]
  }
}