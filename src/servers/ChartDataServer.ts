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
  updateChartData(chartData: ChartsDataAttributes, id: string | number) {
    return ChartsData.update(chartData, {
      where: { chart_id: id },
      returning: true,
    });
  }
}

export default new ChartDataServer();
