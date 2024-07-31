// Load environment variables from .env file
require("dotenv").config();
const fs = require('fs');
const path = require('path');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(path.resolve(__dirname, 'certificates/ca-certificate.pem')).toString()
      }
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};