import { Context } from "koa";
import fs from "fs";
import path from "path";
import response from "../utils/response";
import { uploadFileLogger } from "../logger";

class UploadController {
  uploadImg(ctx: Context) {
    const file = ctx.request.files?.file;

    try {
      if (!Array.isArray(file) && file) {
        const reader = fs.createReadStream(file.filepath);

        const filePath = `/charts/${file.originalFilename}`;

        const writer = fs.createWriteStream(
          path.join(
            path.resolve(path.resolve(__dirname, ".."), "..") + "/public"
          ) + filePath
        );

        reader.pipe(writer);

        response.success(ctx, "上传成功", {
          filePath,
        });
      }
    } catch (e) {
      response.error(ctx, "上传失败");
    }
  }
  async updateImg(ctx: Context) {
    const file = ctx.request.files?.file;

    try {
      if (!Array.isArray(file) && file) {
        const reader = fs.createReadStream(file.filepath);

        const filePath = `/charts/${file.originalFilename}`;

        await new Promise((resolve) => {
          fs.unlink(
            path.join(
              path.resolve(path.resolve(__dirname, ".."), "..") + "/public"
            ) + filePath,
            (err) => {
              if (err) {
                uploadFileLogger.warn(err);
                resolve(response.error(ctx, "更新失败，或找到原始图片"))
              }
              const writer = fs.createWriteStream(
                path.join(
                  path.resolve(path.resolve(__dirname, ".."), "..") + "/public"
                ) + filePath
              );

              reader.pipe(writer);
              resolve(
                response.success(ctx, "上传成功", {
                  filePath,
                })
              );
            }
          );
        });
      }
    } catch (e) {
      console.log(e);

      response.error(ctx, "更新失败");
    }
  }
}

export default new UploadController();
