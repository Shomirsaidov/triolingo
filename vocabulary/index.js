'use strict'
const Config = require('./config')
const Handler = require('./handler')
const Routes = require('./route')

exports.plugin = {
    name: Config.app.name,
    version: Config.app.version,
    register: async (server, options) => {
        server.route(Routes)
    }
}