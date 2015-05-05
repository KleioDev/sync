module.exports = {
  "development": {
      "username": process.env.DEVELOPMENT_DB_USERNAME,
      "password": process.env.DEVELOPMENT_DB_PASSWORD,
      "database": "kleio_development",
      "host": "127.0.0.1",
      "dialect": "postgres"
  },
  "test": {
    "username": process.env.DEVELOPMENT_DB_USERNAME,
    "password": process.env.DEVELOPMENT_DB_PASSWORD,
    "database": "kleio_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "msDevelopment" : {
    user: process.env.SQLSERVER_DEVELOPMENT_USER,
        password: process.env.SQLSERVER_DEVELOPMENT_PASSWORD,
    server: process.env.SQLSERVER_DEVELOPMENT_SERVER,
    database: process.env.SQLSERVER_DEVELOPMENT_DATABASE,
    options : {
    instanceName : process.env.SQLSERVER_DEVELOPMENT_INSTANCE
    }
  }
}
