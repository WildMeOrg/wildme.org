// const webpack = require("webpack");
const { resolve } = require('path');
const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rootDir = resolve(__dirname, '../../');
const outputPath = path.resolve(rootDir, 'build');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(rootDir, 'src/index.jsx'),
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({ parallel: true, sourceMap: true }),
    ],
  },
});
