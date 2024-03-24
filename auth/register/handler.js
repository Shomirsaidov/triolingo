const knex = require('knex');
const JWT = require('jsonwebtoken');
const knexInstance = require('../../knexConfig.js')

module.exports = async (request, h) => {
    console.log("requested !");
    
    const { username, password } = request.query;
    console.log(username, password);

    try {
        const existingUser = await knexInstance('users').where('name', username).first();
        if (existingUser) {
            return h.response('User already exists').code(400); 
        }

        await knexInstance('users').insert({
            name: username,
            level: 'A1',
            lesson: 1,
            password: password 
        });

        let token = JWT.sign({ user: username }, 'mysecretKey', {
            expiresIn: '7d'
        });

        return { token };
    } catch (error) {
        console.error('Error inserting user:', error);
        return h.response('Internal Server Error').code(500);
    }
};
