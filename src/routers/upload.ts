import KoaRouter from '@koa/router'
import UploadController from '../controllers/UploadController'

const uploadRouter = new KoaRouter()

uploadRouter.post("/chartImg", UploadController.uploadImg)

export default uploadRouter