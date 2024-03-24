const Config = require('./config')
const Handler = require('./handler')
const Validate = require('./validate')

module.exports = {
    path: Config.route.url,
    method: Config.route.method,
    config: {
        handler: Handler,
        validate: Validate,
        description: 'Creates a new post',
        notes: 'Creates a new post',
        tags: ['api']
    } 
}