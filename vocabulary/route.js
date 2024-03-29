const Handler = require('./handler')
const Config = require('./config')


module.exports = {
    path: Config.route.url,
    method: Config.route.method,
    config: {
        handler: Handler,
        auth: false,
        description: 'Register',
        notes: 'Some note',
        tags: ['api']
    },
}