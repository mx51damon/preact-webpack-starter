const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PROJECT_PATH = path.resolve(__dirname, '../');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(PROJECT_PATH, './dist'),
  },
};
