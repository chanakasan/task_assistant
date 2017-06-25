var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname + './public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ]
}
