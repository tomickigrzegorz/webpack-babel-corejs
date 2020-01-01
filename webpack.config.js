const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
    devtool: argv.mode === 'production' ? 'none' : 'source-map',
    mode: argv.mode === 'production' ? 'production' : 'development',
    entry: {
      script: './sources/script.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: './[name].js'
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
        {
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'style-resources-loader',
              options: {
                patterns: [
                  path.resolve(__dirname, './sources/scss/_variable.scss')
                ],
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true
      }),
      new MiniCssExtractPlugin({
        filename: './style.css',
      }),
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: './sources/index.html'
      })
    ]
  }
}