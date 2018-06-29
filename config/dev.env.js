'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_URL: '"http://api.orderease.com/api"',
    CUSTOMER_BASE_URL: '"http://customer.orderease.com"'
})
