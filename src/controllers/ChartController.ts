import { Context } from "koa";
import ChartServer from "../servers/ChartServer";
import response from "../utils/response";
import { getUserDataByToken } from "../utils/utils";

class ChartController {
  async getChartList(ctx: Context) {
    const user = getUserDataByToken(ctx);
    const chartList = await ChartServer.getChartList(
      user?.group_id as string[]
    );

    response.success(ctx, "获取模板列表成功", chartList);
  }
  saveChart(ctx: Context) {
    const user = getUserDataByToken(ctx);
    const chartData = ctx.request.body;

    console.log(user, chartData);

    response.success(ctx, "创建成功");
  }
}

export default new ChartController();
