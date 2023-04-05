import KoaRouter from '@koa/router'
import canvasController from "../controllers/TemplateController";

const canvasRouter = new KoaRouter()

canvasRouter.get('/templateClassification',canvasController.getAllTemplateClassification)

export default canvasRouter