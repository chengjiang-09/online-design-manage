import KoaRouter from '@koa/router'
import { Context } from 'koa'
import swaggerSpec from '../configs/swaggerConfig'

const router = new KoaRouter()

router.get('/swagger.json', async (ctx: Context) => {
    ctx.body = swaggerSpec
})

export default router