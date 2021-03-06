const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './client/src/Index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
          "process.env": {
              NODE_ENV: JSON.stringify("development")
          }
      }),
      new webpack.NamedModulesPlugin()
   ]
};