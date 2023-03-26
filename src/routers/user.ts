import KoaRouter from "@koa/router";
import EmailCodeController from "../controllers/EmailCodeController";
import LoginController from "../controllers/LoginController";

const userRouter = new KoaRouter();

userRouter.post("/login/email", LoginController.loginByEmail);

userRouter.post("/login/password", LoginController.loginByPassword);

/**
 * @swagger
 * openapi: 3.0.0
 *
 * /login/emailCode:
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
userRouter.get("/login/emailCode", EmailCodeController.sendCode);

export default userRouter;
