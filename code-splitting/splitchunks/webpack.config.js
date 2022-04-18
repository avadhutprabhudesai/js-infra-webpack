const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    heading: { import: './src/heading.js' },
    para: { import: './src/para.js' },
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0, // if not set to 0, webpack makes smart decisions about when to create separate chunk for a shared module. If it is very small, like in our case, webpack would just inline it.
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code splitting - Dedupe',
      inject: 'body',
      template: './src/index.html',
    }),
  ],
};
