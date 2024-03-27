const knex = require('knex');
const JWT = require('jsonwebtoken');
const knexInstance = require('../knexConfig.js')

module.exports = async (request, h) => {

    let username;
    try {
        let verified = JWT.verify(request.query.token, 'mysecretKey')
        let payload = JWT.decode(request.query.token)
        username = payload.user
    }
    catch(e) {
        console.log(`Error occured : ${e}`)
        return {"statusCode":401,"error":"Unauthorized","message":"Missing authentication"}
    }

    console.log(`requested user ${username}'s data !`);
    
    try {
        const user_data = await knexInstance('users').where('name', username).first()
        if(user_data) {
            return user_data
        }
    }
    catch(e) {
        console.log(e)
        return e
    }

};
