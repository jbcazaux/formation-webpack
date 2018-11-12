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
    path: path.resolve(__dirname, 'build'),
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
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: "[name]-[hash].[ext]" }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  discardComments: {
                    removeAll: true
                  },
                  localIdentName: '[hash:base64:5]'
                }
              }]
          })
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico'
    }),
    new CleanWebpackPlugin(['build'], { verbose: true }), // clean repertoire build
    new ExtractTextPlugin({ filename: 'calc.css' }),
  ].concat(argv.analyse ? new BundleAnalyzerPlugin() : []),
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // si on veut acceder a des ressources non webpack
    publicPath: '/',
    open: true
  },
  devtool: argv.mode === 'development' ? 'source-map' : false
});

