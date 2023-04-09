import ChartsImg, { ChartsImgAttributes } from "../models/ChartsImg";

class ChartImgServer {
  createChartImg(chartsImg: ChartsImgAttributes) {
    return ChartsImg.create(chartsImg);
  }
  findChartImgByChartId(chartId: number | string){
    return ChartsImg.findOne({
      where: {
        chart_id:chartId
      }
    })
  }
}

export default new ChartImgServer();
