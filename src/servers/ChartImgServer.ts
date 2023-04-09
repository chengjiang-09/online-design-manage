import ChartsImg, { ChartsImgAttributes } from "../models/ChartsImg";

class ChartImgServer {
  createChartImg(chartsImg: ChartsImgAttributes) {
    return ChartsImg.create(chartsImg);
  }
}

export default new ChartImgServer();
