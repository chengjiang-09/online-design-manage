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
  redis: {
    redis_port: process.env.REDIS_PORT,
    redis_host: process.env.REDIS_HOST,
    redis_db: process.env.REDIS_DB,
    redis_verify_login: {
      key: "online_design_login_",
      expire: 300,
    },
  },
  log: {
    appenders: {
      req: { type: "file", filename: "logs/req.log" },
      db: { type: "file", filename: "logs/db.log" },
      redis: { type: "file", filename: "logs/redisDb.log" },
      smtp: { type: "file", filename: "logs/smtp.log" },
      finalInfo: { type: "file", filename: "logs/finalInfo.log" },
    },
    categories: {
      default: { appenders: ["req"], level: "info" },
      db: { appenders: ["db"], level: "info" },
      redis: { appenders: ["redis"], level: "info" },
      smtp: { appenders: ["smtp"], level: "info" },
      finalInfo: { appenders: ["finalInfo"], level: "info" },
    },
  },
  jwt: {
    jwt_sercret: process.env.JWT_SERCRET,
    jwt_expire: process.env.JWT_EXPIRE,
    jwt_unless: ["/design","/design/swagger.json", "/design/login/email", "/design/login/emailCode"],
  },
  smtp: {
    smpt_user: process.env.SMTP_USER,
    smpt_password: process.env.SMPT_PASSWORD,
  },
  regExp: {
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  },
};

export default config;
