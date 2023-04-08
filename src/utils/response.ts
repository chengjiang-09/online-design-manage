import { Context } from "koa";

function success(
  ctx: Context,
  msg: string = "请求成功",
  data: any = [],
  code: number = 1,
) {
    ctx.response.body = {
        code,
        msg,
        data
    }
}

function error(
    ctx: Context,
    msg: string = "请求失败",
    data: any = [],
    code: number = 0,
  ) {
      ctx.response.body = {
          code,
          msg,
          data
      }
  }


export default {
    success,
    error
}