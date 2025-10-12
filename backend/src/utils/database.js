module.exports = {
  development: {
    username: "root",
    password: "admin",
    database: "todo_app_dev",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
