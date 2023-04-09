import Chart, { ChartsAttributes } from "../models/Charts";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import ChartsData from "../models/ChartsData";
import ChartsImg from "../models/ChartsImg";

class ChartServer {
  /**
   * 获取画布模板列表，分三种情况，在组内的人（未实现，group_id并没有正确使用），个人（及group_id为[0],且author_id为本人），所有人(group_id为[1])
   *
   * @param group_id
   * @param userId
   * @returns
   */
  getChartList(group_id: Array<any>, userId: string | number) {
    return Chart.findAll({
      where: {
        [Op.or]: [
          Sequelize.fn(
            "JSON_CONTAINS",
            Sequelize.col("group_id"),
            JSON.stringify(group_id)
          ),
          {
            author_id: userId,
          },
          Sequelize.fn(
            "JSON_CONTAINS",
            Sequelize.col("group_id"),
            JSON.stringify([1])
          ),
        ],
      },
      include: [
        {
          model: ChartsData,
        },
        {
          model: ChartsImg,
        },
      ],
    });
  }
  /**
   *
   * 获取画布模板列表，分三种情况，在组内的人（未实现，group_id并没有正确使用），个人（及group_id为[0],且author_id为本人），所有人(group_id为[1])
   * 并分页
   *
   * @param group_id
   * @param userId
   * @param page
   * @param limit
   * @returns
   */
  getChartListPaginate(
    _group_id: Array<any>,
    userId: string | number,
    page: number = 1,
    limit: number = 9
  ) {
    return Chart.findAndCountAll({
      where: {
        [Op.or]: [
          // Sequelize.fn(
          //   "JSON_CONTAINS",
          //   Sequelize.col("group_id"),
          //   JSON.stringify(group_id)
          // ),
          {
            author_id: userId,
          },
          Sequelize.fn(
            "JSON_CONTAINS",
            Sequelize.col("group_id"),
            JSON.stringify([1])
          ),
        ],
      },
      limit: limit,
      offset: (page - 1) * limit,
      include: [
        {
          model: ChartsImg,
        },
      ],
    });
  }
  createChart(chartsData: ChartsAttributes) {
    return Chart.create(chartsData);
  }
}

export default new ChartServer();
