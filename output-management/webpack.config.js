const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    heading: './src/heading.js',
    para: './src/para.js',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      inject: 'body',
      template: './src/index.html',
    }),
  ],
};
