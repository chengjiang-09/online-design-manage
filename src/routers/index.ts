import KoaRouter from '@koa/router'
import chartRouter from './chart'
import userRouter from './user'
import swaggerRouter from './swagger'
import canvasRouter from './canvas'
import authRouter from './auth'

const router = new KoaRouter({
    prefix: '/design'
})

router.use(swaggerRouter.routes())
router.use(userRouter.routes())
router.use(chartRouter.routes())
router.use(canvasRouter.routes())
router.use(authRouter.routes())

export default router