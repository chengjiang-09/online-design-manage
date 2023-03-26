import KoaRouter from '@koa/router'
import chartRouter from './chart'
import userRouter from './user'
import swaggerRouter from './swagger'

const router = new KoaRouter({
    prefix: '/design'
})

router.use(swaggerRouter.routes())
router.use(userRouter.routes())
router.use(chartRouter.routes())

export default router