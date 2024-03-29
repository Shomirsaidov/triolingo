const knexInstance = require('../knexConfig.js')
const auth = require('./auth.js')

module.exports = async (request, h) => {

    if(!auth(request)) {
        return {"statusCode":401,"error":"Unauthorized","message":"Missing authentication"}
    }

    console.log(`requested user ${auth()}'s data !`);
    

    try {
        let lesson_vocab = await knexInstance('vocabulary')    
                         .where('lesson_id', request.params.lesson_id)
 
         if(lesson_vocab) {
             return lesson_vocab
         } 
         return 'Ooops, something went wrong !'
         
 
     } catch (error) {
        return error
     }


};
