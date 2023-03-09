import path from "path";
import { Sequelize } from "sequelize-typescript";
import config from "../configs/config";
import { dbLogger } from "../logger";

const sequelize = new Sequelize(
  config.db.db as string,
  config.db.db_user as string,
  config.db.db_password as string,
  {
    host: config.db.db_host,
    port: config.db.db_port as unknown as number,
    dialect: "mysql",
    logging:msg => {
        dbLogger.info(msg)
    },
    define: {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    },
    models: [
      path.join(__dirname, "..", "models/**/*.ts"),
      path.join(__dirname, "..", "models/**/*.js"),
    ],
  }
);

const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("数据库链接成功");
  } catch (error) {
    console.error("数据库链接失败", error);
  }
};

export default db;
