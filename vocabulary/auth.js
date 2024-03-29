const JWT = require('jsonwebtoken');

module.exports = (request) => {
 
    try {
        let verified = JWT.verify(request.query.token, 'mysecretKey')
        let payload = JWT.decode(request.query.token)
        if(verified && payload) {
            return payload.user
        }
    }
    catch(e) {
        console.log(`Error occured : ${e}`)
        return false
    }


}