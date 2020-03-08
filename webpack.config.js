const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ENTRY = {
  actions: './src/actions/index.js',
  options: './src/options/index.js'
}

const entryHtmlPlugins = Object.keys(ENTRY).map(entryName => {
  return new HtmlWebPackPlugin({
    template: `./src/${entryName}/index.html`,
    filename: `${entryName}/index.html`,
    chunks: [entryName]
  });
});

module.exports = {
  entry: ENTRY,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js'
  },
  plugins: entryHtmlPlugins
};
