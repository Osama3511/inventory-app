const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.HOST_NAME,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});
