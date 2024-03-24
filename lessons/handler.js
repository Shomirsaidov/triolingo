const knex = require('knex');
const JWT = require('jsonwebtoken');
const knexInstance = require('../knexConfig.js')

module.exports = async (request, h) => {
    console.log("requested a lesson material !");
    console.log(request.url.pathname)

    let a = request.url.pathname.split('/')
    let lesson_id = a[a.length - 1]
    
    try {
       let lesson_material = await knexInstance('cards')    
                        .where('lesson', lesson_id)

        if(lesson_material) {
            return lesson_material
        } 
        return 'Ooops, something went wrong !'
        

    } catch (error) {
       return error
    }
};
