const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  devServer: {
    static: './dist/',
    compress: true,
    liveReload: true,
    hot: false,
    open: false,
    port: 5000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      inject: 'body',
      template: './src/index.html',
    }),
  ],
};
