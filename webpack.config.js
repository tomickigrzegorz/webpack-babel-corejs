const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  return {
    devtool: argv.mode === 'production' ? 'source-map' : 'source-map',
    mode: argv.mode === 'production' ? 'production' : 'development',
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
          loaders: [
            'babel-loader'
          ],
          exclude: [/node_modules/]
        },
        {
          test: /\.css$/,
          use: [
            argv.mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                modules: {
                  localIdentName: '[sha1:hash:hex:4]',
                },
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './index.html',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[name].[hash].css',
      })
    ]
  }
};
