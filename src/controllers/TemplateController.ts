import { Context } from "koa";
import TemplateClassificationServer from "../servers/TemplateClassificationServer";
import response from "../utils/response";

class CanvasController {
  async getAllTemplateClassification(ctx: Context) {
    const templateClassification =
      await TemplateClassificationServer.findEveryThing();

    console.log(templateClassification);

    response.success(ctx, "获取所有组件模版成功", 0, templateClassification);
  }
}

export default new CanvasController();
