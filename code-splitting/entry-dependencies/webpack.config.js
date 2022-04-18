const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    heading: { import: './src/heading.js', dependOn: 'math' },
    para: { import: './src/para.js', dependOn: 'math' },
    math: './src/math.js',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code splitting - Dedupe',
      inject: 'body',
      template: './src/index.html',
    }),
  ],
};
