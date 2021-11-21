const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/profile/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'orchestrator',
      remotes: {},
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
