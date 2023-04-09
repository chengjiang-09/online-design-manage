import { Context } from "koa";
import fs from "fs";
import path from "path";
import response from "../utils/response";

class UploadController {
  uploadImg(ctx: Context) {
    // const uploadData = ctx.request.body as UploadImg;
    const file = ctx.request.files?.file;

    try{
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
    }catch(e) {
      response.error(ctx, "上传失败")
    }
  }
}

export default new UploadController();
