import KoaRouter from '@koa/router'
import EmailCodeController from '../controllers/EmailCodeController'
import LoginController from '../controllers/LoginController'

const userRouter = new KoaRouter()

userRouter.post('/login/email',LoginController.loginByEmail)
userRouter.post('/login/password',LoginController.loginByPassword)

userRouter.get('/login/emailCode',EmailCodeController.sendCode)

export default userRouter