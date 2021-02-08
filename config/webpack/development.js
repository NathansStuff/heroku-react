process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
new webpack.DefinePlugin({ "process.env": { RAILS_ENV: process.env.RAILS_ENV } })