const { merge } = require('webpack-merge');
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
module.exports =  merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
  },
})
