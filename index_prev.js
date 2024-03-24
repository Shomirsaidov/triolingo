// bismillah

/*
Questions List

1) Knex migrations vs MySQL Admin
2) Auth 
3) Roles
4) What are seeds

*/




const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwaggered = require('hapi-swaggered');
const HapiSwaggeredUI = require('hapi-swaggered-ui');
const knexConfig = require('./knexfile.js')
const knex = require('knex')(knexConfig.development)

const init = async () => {
    const server = Hapi.Server({
        port: 4545,
        host: 'localhost',
        "routes": {
          "cors": {
              "origin": ["http://localhost:4200"],
              "headers": ["Accept", "Content-Type"],
              "additionalHeaders": ["X-Requested-With"]
          }
      }
    });

    await server.register([require('./posts/posts_list'), 
                          require('./posts/posts_insert')]);
    await server.register([
        Inert,
        Vision,
        {
          plugin: HapiSwaggered,
          options: {
            info: {
              title: 'Test API Documentation',
              version: '1.0.0',
            },
          },
        },
        {
          plugin: HapiSwaggeredUI,
          options: {
            title: 'Swagger UI',
            path: '/docs', 
          },
        },
      ]);
       

    await server.start();
    console.log('Server started on port 4545 !');
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();







