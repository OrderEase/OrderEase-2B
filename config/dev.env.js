'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_URL: '"http://api.orderease.com/v1/"',
    CUSTOMER_BASE_URL: '"http://customer.orderease.com"'
})
