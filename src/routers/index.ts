import KoaRouter from '@koa/router'
import chartRouter from './chart'
import userRouter from './user'
import swaggerRouter from './swagger'
import canvasRouter from './canvas'
import authRouter from './auth'
import uploadRouter from './upload'
import systemManageRouter from './systemManage'

const router = new KoaRouter({
    prefix: '/design'
})

router.use(swaggerRouter.routes())
router.use(userRouter.routes())
router.use(chartRouter.routes())
router.use(canvasRouter.routes())
router.use(authRouter.routes())
router.use(uploadRouter.routes())
router.use(systemManageRouter.routes())

export default router