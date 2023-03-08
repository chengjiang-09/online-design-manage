const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    db: process.env.DB,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_port: process.env.DB_PORT,
  },
  log: {
    appenders: {
      cheese: { type: "file", filename: "logs/cheese.log" },
      db: { type: "file", filename: "logs/db.log" },
    },
    categories: {
      default: { appenders: ["cheese"], level: "error" },
      db: { appenders: ["db"], level: "info" },
    },
  },
  jwt: {
    jwt_sercret: process.env.JWT_SERCRET,
    jwt_expire: process.env.JWT_EXPIRE,
  },
};

export default config;
