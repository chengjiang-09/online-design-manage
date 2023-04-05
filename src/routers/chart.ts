import KoaRouter from '@koa/router'
import TemplateController from '../controllers/TemplateListController'

const chartRouter = new KoaRouter()

chartRouter.get('/template/list', TemplateController.getTemplateList)

export default chartRouter