const knex = require('knex')

module.exports = knex({
    client: 'mysql', 
    connection: {
        host : 'bzxbwi6a8c677t1mhmhl-mysql.services.clever-cloud.com',
        user : 'uuybf34djwzttmnq',
        password : 'uuybf34djwzttmnq',
        database : 'bzxbwi6a8c677t1mhmhl'
    }
});
