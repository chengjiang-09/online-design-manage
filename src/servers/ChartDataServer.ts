import ChartsData, { ChartsDataAttributes } from "../models/ChartsData"

class ChartDataServer {
    createChartData(chartData:ChartsDataAttributes){
        return ChartsData.create(chartData)
    }
}

export default new ChartDataServer()