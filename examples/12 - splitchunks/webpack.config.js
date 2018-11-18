const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => ({
  entry: {
    add: ['./src/add.js',],
    sub: ['./src/sub.js']
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: { extensions: ['.js'] },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0 // par defaut 30k, afin d éviter un appel réseau supplémentaire. duplication vs latence réseau
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico'
    }),
    new CleanWebpackPlugin(['build'], { verbose: true }),
  ].concat(argv.analyse ? new BundleAnalyzerPlugin() : []),
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    open: true
  },
  devtool: argv.mode === 'development' ? 'source-map' : false
});
