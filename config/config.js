require('dotenv').config()

const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME
} = process.env;
module.exports =
    {
        "development": {
            "username": DB_USERNAME,
            "password": DB_PASSWORD,
            "database": DB_NAME,
            "host": DB_HOSTNAME,
            "dialect": "mysql2",
            "dialectModule": "mysql2",
        },
        "test": {
            "username": DB_USERNAME,
            "password": DB_PASSWORD,
            "database": DB_NAME,
            "host": DB_HOSTNAME,
            "dialect": "mysql2",
            "dialectModule": "mysql2",
        },
        "production": {
            "username": DB_USERNAME,
            "password": DB_PASSWORD,
            "database": DB_NAME,
            "host": DB_HOSTNAME,
            "dialect": "mysql2",
            "dialectModule": "mysql2",
        }
    }
