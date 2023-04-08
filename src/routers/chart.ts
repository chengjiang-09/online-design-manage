import KoaRouter from '@koa/router'
import ChartController from '../controllers/ChartController'

const chartRouter = new KoaRouter()

chartRouter.get('/template/list', ChartController.getChartList)

chartRouter.post('/template', ChartController.saveChart)

export default chartRouter