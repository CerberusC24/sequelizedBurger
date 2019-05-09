module.exports = 
{
  "development": 
  {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": 
  {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
    }
}
