'use strict'

module.exports = {
    dev: {
        // Paths
        assetsPublicPath: '/dist/',

        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 8080 // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    },

    build: {
        // Paths
        assetsPublicPath: 'http://admin.orderease.com/dist/'
    }
}
