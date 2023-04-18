import dotenv from "dotenv";
dotenv.config();
import db from "./db";
db();
import redis from "./db/redis";
redis();

import Koa from "koa";
import compress from "koa-compress";
import router from "./routers";
import KoaBody from "koa-body";
import Conditional from "koa-conditional-get";
import Etag from "koa-etag";
import { koaSwagger } from "koa2-swagger-ui";
import KoaStatic from "koa-static";

import reqLoggerMiddleware from "./middlewares/reqLoggerMiddleware";
import finalInfoMiddleware from "./middlewares/finalInfoMiddleware";
import authMiddleware from "./middlewares/authMiddleware";
import corsMiddleware from "./middlewares/corsMiddleware";
import loginLoggerMiddleware from "./middlewares/loginLoggerMiddleware";

import { swaggerUiConfig } from "./configs/swaggerConfig";
import path from "path";
import { uploadFileLogger, reqLogger } from "./logger";
import { getDate } from "./utils/utils";

const app = new Koa();

app
  .use(corsMiddleware)
  .use(koaSwagger(swaggerUiConfig))
  .use(
    KoaStatic(path.join(path.resolve(__dirname, "..") + "/public"), {
      maxAge: 60 * 60 * 1000,
      gzip: true,
    })
  )
  .use(Conditional())
  .use(Etag())
  .use(
    KoaBody({
      multipart: true,
      formidable: {
        multiples: true,
        maxFieldsSize: 10 * 1024 * 1024,
        onFileBegin: (name, file) => {
          uploadFileLogger.info(`时间:${getDate()} ${name} ${file.filepath}`);
        },
        // 保持后缀名\
        keepExtensions: true,
      },
      onError(err) {
        reqLogger.warn(err);
      },
    })
  )
  .use(
    compress({
      threshold: 2048, // 响应大于2048字节才压缩，默认为1024(1kb)
      br: false, // 禁用br压缩方式，使用gzip
    })
  )
  .use(authMiddleware)
  .use(loginLoggerMiddleware)
  .use(reqLoggerMiddleware)
  .use(router.routes())
  .use(finalInfoMiddleware);

function run(port: any) {
  return app.listen(port, () => {
    console.log(`server is running at http://127.0.0.1:${port}`);
  });
}

export default run;
