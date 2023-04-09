import { Context } from "koa";
import ChartServer from "../servers/ChartServer";
import ChartDataServer from "../servers/ChartDataServer";
import ChartImgServer from "../servers/ChartImgServer";
import response from "../utils/response";
import { getUserDataByToken } from "../utils/utils";
import { ChartsDataAttributes } from "../models/ChartsData";
import { ChartsAttributes } from "../models/Charts";
import { paginate } from "../utils/paginate";
import { ChartsImgAttributes } from "../models/ChartsImg";
import config from "../configs/config";

interface ChartData {
  data: object;
  groupId: any[];
  title: string;
  context: string;
  img: string;
}

interface PageData {
  limit: number;
  page: number;
}

class ChartController {
  async getChartList(ctx: Context) {
    const user = getUserDataByToken(ctx);
    const pageData = ctx.request.query as unknown as PageData;

    if (pageData && !isNaN(pageData.limit) && !isNaN(pageData.page)) {
      const { rows, count } = await ChartServer.getChartListPaginate(
        user?.group_id ? user?.group_id : [],
        user?.id ? user?.id : -1,
        Number(pageData.page),
        Number(pageData.limit)
      );

      const paginateData = paginate(rows, pageData.page, count, pageData.limit);
      response.success(ctx, "获取模板列表成功", paginateData);
    }
  }
  async saveChart(ctx: Context) {
    const user = getUserDataByToken(ctx);
    const chartData = ctx.request.body as ChartData;

    const createData = {
      author_name: user?.user_name,
      author_id: user?.id,
      origin_author_name: user?.user_name,
      origin_author_id: user?.id,
      group_id: [Number(chartData.groupId)],
      title: chartData.title,
      context: chartData.context,
    };

    const chart = await ChartServer.createChart(createData as ChartsAttributes);

    const createChartData = {
      chart_id: chart.dataValues.id,
      data: chartData.data,
    };

    const createChartImg = {
      chart_id: chart.dataValues.id,
      img_path: config.assertsUrl.chartsImg,
      name: chartData.img,
    };

    const createdChartImg = await ChartImgServer.createChartImg(
      createChartImg as ChartsImgAttributes
    );

    const createdChartData = await ChartDataServer.createChartData(
      createChartData as ChartsDataAttributes
    );

    response.success(ctx, "创建成功", {
      ...chart.dataValues,
      data: createdChartData.dataValues.data,
      imgPath: createdChartImg.dataValues.img_path,
    });
  }
}

export default new ChartController();
