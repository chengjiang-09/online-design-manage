import KoaRouter from "@koa/router";
import AuthController from "../controllers/AuthController";

const authRouter = new KoaRouter();

/**
 * @swagger
 * openapi: 3.0.0
 *
 * /design/routes:
 *   get:
 *     summary: 获取权限内路由信息
 *     description: 获取权限内路由信息
 *     tags:
 *       - user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 返回用户token和对应权限路由
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 routes:
 *                   type: array
 *                   description: 路由信息
 *                   items:
 *                     type: object
 *
 */
authRouter.post("/routes", AuthController.getRoutes);

authRouter.get("/canvasHeaderMenu", AuthController.getCanvasHeaderMenu);

export default authRouter;
