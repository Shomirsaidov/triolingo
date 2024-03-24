const knex = require('knex');
const JWT = require('jsonwebtoken');
const knexInstance = require('../knexConfig.js')

module.exports = async (request, h) => {
    console.log(`requested user ${request.auth.credentials.user}'s data !`);
    
    try {
        const user_data = await knexInstance('users').where('name', request.auth.credentials.user).first()
        if(user_data) {
            return user_data
        }
    }
    catch(e) {
        console.log(e)
    }


    return request.auth.credentials
};
