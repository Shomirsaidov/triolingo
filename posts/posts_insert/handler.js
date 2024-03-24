const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig.development)

module.exports = async(request,h) => {
    try {
        console.log(request.payload)
        let insertedNode = await knex("posts")
            .insert(request.payload)

        return insertedNode
    }
    catch (e) {
        return 'Ooops, some unexpected errors occurred...'
    }
}