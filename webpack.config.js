const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    devtool: argv.mode === 'production' ? 'none' : 'source-map',
    mode: argv.mode === 'production' ? 'production' : 'development',
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
  }
};


