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
      req: { type: "file", filename: "logs/req.log" },
      db: { type: "file", filename: "logs/db.log" },
      finalInfo: { type: "file", filename: "logs/finalInfo.log" },
    },
    categories: {
      default: { appenders: ["req"], level: "info" },
      db: { appenders: ["db"], level: "info" },
      finalInfo: { appenders: ["finalInfo"], level: "info" },
    },
  },
  jwt: {
    jwt_sercret: process.env.JWT_SERCRET,
    jwt_expire: process.env.JWT_EXPIRE,
    jwt_unless: [
      '/design',
      '/design/login'
    ]
  },
};

export default config;
