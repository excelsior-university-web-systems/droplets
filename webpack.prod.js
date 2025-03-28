const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge( common, {
  mode: 'production',
  plugins: [
    new webpack.BannerPlugin( {
      banner: `DROPLETS
@version: ${require('./package.json').version}
@author: Ethan Lin
@updated on: 03-28-2025
@url: https://github.com/excelsior-university-web-systems/droplets
@license: The MIT License (MIT)
@copyright: (c) 2018-${new Date().getUTCFullYear()} Ethan Lin`,
      entryOnly: true
    } ),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin( 
        { extractComments: false }
      ),
      new CssMinimizerPlugin(),
    ],
  },
} );