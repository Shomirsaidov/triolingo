const knex = require('knex');
const JWT = require('jsonwebtoken');
const knexInstance = require('../../knexConfig.js')


module.exports = async (request, h) => {
    console.log("requested login !");
    
    // Accessing data from request body for a POST request
    const { username, password } = request.query;
    console.log(username, password);

    try {
        // Check if user exists and credentials match
        const user = await knexInstance('users').where('name', username).first();
        if (!user || user.password !== password) {
            return h.response('Invalid username or password').code(401); // Return a 401 Unauthorized response
        }

        // Generate JWT token
        let token = JWT.sign({ user: username }, 'mysecretKey', {
            expiresIn: '7d'
        });

        // Return the generated token
        return { token };
    } catch (error) {
        // Handle any errors that might occur during the login process
        console.error('Error during login:', error);
        return h.response('Internal Server Error').code(500);
    }
};
