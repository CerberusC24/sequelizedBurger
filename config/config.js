require("dotenv").config();

module.exports = 
{
  "development": 
  {
    "username": process.env.DBUSERNAME,
    "password": process.env.DBPASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DBHOST,
    "dialect": "mysql"
  },
  "production": 
  {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
