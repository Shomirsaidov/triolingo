'use strict';

const Hapi = require('hapi');
const HapiAuth = require('hapi-auth-jwt2');
const JWT = require('jsonwebtoken');
const Joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwaggered = require('hapi-swaggered');
const HapiSwaggeredUI = require('hapi-swaggered-ui');
const knexConfig = require('./knexfile.js')
const knex = require('knex')(knexConfig.development)

const Register = require('./auth/register/index.js')
const Login = require('./auth/login/index.js')
const Profile = require('./profile/index.js')
const Lesson = require('./lessons/index.js')
const Progress = require('./progress/index.js')



const server = Hapi.Server({
    port: 4545,
    host: 'localhost',
    "routes": {
      "cors": {
          "origin": ["*"],
          "headers": ["Accept", "Content-Type"],
          "additionalHeaders": ["X-Requested-With"]
      }
  }
});

const init = async () => {
  await server.register(HapiAuth);

  server.auth.strategy('jwt', 'jwt', {
    key: 'mysecretKey',
    validate: validate,
    verifyOptions: { algorithms: ['HS256'] }
  });


  await server.register([{plugin: Register},
                          {plugin: Login}, 
                          {plugin: Profile},
                          {plugin: Lesson}, 
                          {plugin: Progress}])


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
  console.log("Server has started on port 4545 successfully !");
};

const validate = (decoded, request, h) => {
//   if (decoded.name === 'Chai Phonbopit') {
//     return { isValid: true };
//   } else {
//     return { isValid: false };
//   }

    return {isValid: true}
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();