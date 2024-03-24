// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', // Адрес сервера базы данных
      user: 'root', // Имя пользователя базы данных
      password: '', // Пароль пользователя базы данных
      database: 'triolingo' // Название базы данных
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations' // Директория, где хранятся миграции
    },
    seeds: {
      directory: './db/seeds' // Директория, где хранятся сиды (заполнение данных)
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
