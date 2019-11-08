const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      script: './sources/script.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
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
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: './config/',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
    ]
  }
}