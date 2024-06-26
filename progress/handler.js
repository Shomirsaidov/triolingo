const knex = require('knex');
const JWT = require('jsonwebtoken');
const knexInstance = require('../knexConfig.js')

const progressRoute = ['A1','A2','B1']


module.exports = async (request, h) => {

    let username_decoded;
    try {
        let verified = JWT.verify(request.query.token, 'mysecretKey')
        let payload = JWT.decode(request.query.token)
        username_decoded = payload.user
    }
    catch(e) {
        console.log(`Error occured : ${e}`)
        return {"statusCode":401,"error":"Unauthorized","message":"Missing authentication"}
    }


    console.log("reported lesson completion !");
    console.log(request.url.pathname)

    let a = request.url.pathname.split('/')
    let lesson_id = a[a.length - 1]
    
    try {   
        let current_level = await knexInstance('users').select('level','lesson').where('name', username_decoded)
        let progress = `${current_level[0].level}-${current_level[0].lesson}`
        let new_level;
        if(progress == lesson_id) {
            console.log(current_level[0].lesson)
            if(current_level[0].lesson == 8 ) {
                let a = current_level[0].level
                let b = progressRoute.indexOf(a)
                new_level = progressRoute[b + 1] + '-1'
            } else {
                new_level = `${current_level[0].level}-${current_level[0].lesson + 1}`
            }

            let a = new_level.split('-')
            let level = a[0]
            let lesson = a[1]
            await knexInstance('users').update({level, lesson}).where('name', username_decoded)

            return new_level

        } else {
            return 'Still the same'
        }
        

    } catch (error) {
       return error
    }
};
