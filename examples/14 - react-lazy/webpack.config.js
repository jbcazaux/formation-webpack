const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => ({
  entry: {
    main: ['./src/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    chunkFilename: '[name].js',
    filename: '[name].js',
    publicPath: ''
  },
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
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
