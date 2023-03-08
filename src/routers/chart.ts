import KoaRouter from '@koa/router'
import TemplateController from '../controllers/TemplateController'

const chartRouter = new KoaRouter()

chartRouter.get('/template/list', TemplateController.getTemplateList)

export default chartRouter