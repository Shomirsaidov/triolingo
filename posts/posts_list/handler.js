'use strict'

const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig.development)

module.exports = async (request, response) => {
    try {
        let data_derived = await knex.select()
            .table('posts')
            .orderBy('id', 'desc')

        return data_derived
    }
    catch(e) {
        return 'Oops some error occured !'
    }
}