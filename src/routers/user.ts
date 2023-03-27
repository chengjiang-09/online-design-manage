import KoaRouter from "@koa/router";
import EmailCodeController from "../controllers/EmailCodeController";
import LoginController from "../controllers/LoginController";

const userRouter = new KoaRouter();

/**
 * @swagger
 * openapi: 3.0.0
 *
 * /design/login/email:
 *   get:
 *     summary: 邮箱验证码登录
 *     description: 邮箱验证码登录
 *     tags:
 *       - user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: body
 *         description: 邮箱
 *         required: true
 *         schema:
 *           type: string
 *       - name: code
 *         in: body
 *         description: 邮箱验证码
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
 *                 token:
 *                   type: string
 *                   description: token
 *                 routes:
 *                   type: array
 *                   description: 路由信息
 *                   items:
 *                     type: object
 *
 */
userRouter.post("/login/email", LoginController.loginByEmail);

/**
 * @swagger
 * openapi: 3.0.0
 *
 * /design/login/password:
 *   get:
 *     summary: 邮箱验证码登录
 *     description: 邮箱验证码登录
 *     tags:
 *       - user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: email
 *         in: body
 *         description: 邮箱
 *         required: true
 *         schema:
 *           type: string
 *       - name: code
 *         in: body
 *         description: 密码
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
 *                 token:
 *                   type: string
 *                   description: token
 *                 routes:
 *                   type: array
 *                   description: 路由信息
 *                   items:
 *                     type: object
 *
 */
userRouter.post("/login/password", LoginController.loginByPassword);

/**
 * @swagger
 * openapi: 3.0.0
 *
 * /design/login/emailCode:
 *   get:
 *     summary: 获取邮件验证码
 *     description: 获取邮件验证码
 *     tags:
 *       - user
 *     parameters:
 *       - name: email
 *         in: query
 *         description: 邮箱
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 无具体返回值
 */
userRouter.get("/login/emailCode", EmailCodeController.sendCode);

export default userRouter;
