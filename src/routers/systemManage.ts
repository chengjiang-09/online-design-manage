import KoaRouter from '@koa/router'
import SystemManageController from '../controllers/SystemManageController'


const systemManageRouter = new KoaRouter({
    prefix: '/system'
})

systemManageRouter.get("/users", SystemManageController.getAllUsers)

systemManageRouter.put("/users", SystemManageController.updateUser)

systemManageRouter.get("/routes",SystemManageController.getAllRoutes)

systemManageRouter.put("/template", SystemManageController.updateTemplate)

export default systemManageRouter