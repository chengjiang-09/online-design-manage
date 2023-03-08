import KoaRouter from '@koa/router'
import chartRouter from './chart'
import userRouter from './user'

const router = new KoaRouter({
    prefix: '/design'
})

router.use(userRouter.routes())
router.use(chartRouter.routes())

export default router