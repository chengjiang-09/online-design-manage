import ChartsImg, { ChartsImgAttributes } from "../models/ChartsImg";

class ChartImgServer {
  createChartImg(chartsImg: ChartsImgAttributes) {
    return ChartsImg.create(chartsImg);
  }
  findChartImgByChartId(chartId: number | string) {
    return ChartsImg.findOne({
      where: {
        chart_id: chartId,
      },
    });
  }
  updateChartImg(chartsImg: ChartsImgAttributes, id: string | number) {
    return ChartsImg.update(chartsImg, { where: { chart_id: id } });
  }
}

export default new ChartImgServer();
