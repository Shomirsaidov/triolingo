const knex = require('knex')

module.exports = knex({
    client: 'mysql', 
    connection: {
        host : 'bsogajkqgaisbpf8og4y-mysql.services.clever-cloud.com',
        user : 'unk2rxnlqquwlqxu',
        password : 'unk2rxnlqquwlqxu',
        database : 'bsogajkqgaisbpf8og4y'
    }
});
