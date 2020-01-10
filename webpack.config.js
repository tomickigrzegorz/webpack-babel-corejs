const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodPlugin = (plugin, argv) => {
  return argv.mode === 'production' ? plugin : () => { };
}

module.exports = (env, argv) => {
  const imageModeFileLoader = argv.mode === 'production' ? './images/' : ''
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
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: (url, resourcePath, context) => {
              if(/sources/.test(url)) {
                return url.replace('sources', '.')
              }
            },
          },
        }
      ]
    },
    plugins: [
      prodPlugin(
        new CleanWebpackPlugin({
          verbose: true
        }),
        argv
      ),
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