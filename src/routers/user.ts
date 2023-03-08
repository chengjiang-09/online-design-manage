import KoaRouter from '@koa/router'
import LoginController from '../controllers/LoginController'

const userRouter = new KoaRouter()

userRouter.get('/login',LoginController.index)

export default userRouter