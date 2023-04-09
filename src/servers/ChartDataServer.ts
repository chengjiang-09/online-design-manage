import ChartsData, { ChartsDataAttributes } from "../models/ChartsData";

class ChartDataServer {
  createChartData(chartData: ChartsDataAttributes) {
    return ChartsData.create(chartData);
  }
  findChartDataByChartId(chartId: number | string) {
    return ChartsData.findOne({
      where: {
        chart_id: chartId,
      },
    });
  }
}

export default new ChartDataServer();
