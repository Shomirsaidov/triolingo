const knex = require('knex')

module.exports = knex({
    client: 'mysql', 
    // below is connection to kitob.tj database
    // connection: 'mysql://uuybf34djwzttmnq:stMVUKK0bkH8A8BoiC7l@bzxbwi6a8c677t1mhmhl-mysql.services.clever-cloud.com:3306/bzxbwi6a8c677t1mhmhl'
    connection: 'mysql://unk2rxnlqquwlqxu:MkFYnKcTwTj32gWOB106@bsogajkqgaisbpf8og4y-mysql.services.clever-cloud.com:3306/bsogajkqgaisbpf8og4y'
});
