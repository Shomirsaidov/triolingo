const Config = require('./config')
const Routes = require('./route')

module.exports.plugin = {
    name: Config.app.name,
    version: Config.app.version,
    register: async(server, options) => {
        await server.route(Routes)
    }
}