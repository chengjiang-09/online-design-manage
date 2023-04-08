import ChartData, { ChartDataAttributes } from "../models/ChartsData"

class ChartDataServer {
    createChartData(chartData:ChartDataAttributes){
        return ChartData.create(chartData)
    }
}

export default new ChartDataServer()