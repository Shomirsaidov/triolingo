const Handler = require('./handler')
const Config = require('./config')
const Validate = require('./validate');


module.exports = {
    path: Config.route.url,
    method: Config.route.method,
    config: {
        handler: Handler,
        // validate: Validate,
        auth: false,
        description: 'Register',
        notes: 'Some note',
        tags: ['api']
    },
}