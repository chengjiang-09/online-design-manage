import Chart, { ChartsAttributes } from "../models/Charts";
import { Sequelize } from "sequelize-typescript";

class ChartServer {
  getChartList(group_id: Array<string>) {
    return Chart.findAll({
      where: {
        group_id: Sequelize.fn(
          "JSON_CONTAINS",
          Sequelize.col("group_id"),
          JSON.stringify(group_id)
        ),
      },
    });
  }
  createChart(chartData: ChartsAttributes) {
    return Chart.create(chartData);
  }
}

export default new ChartServer();
