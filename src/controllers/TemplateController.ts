import { Context } from "koa";
import Jwt from "../utils/auth";

class TemplateController {
  getTemplateList(ctx: Context) {
    const token = ctx.headers.authorization?.split(" ")[1];

    if (token) {
      console.log(Jwt.verify(token));
    }
  }
}

export default new TemplateController
