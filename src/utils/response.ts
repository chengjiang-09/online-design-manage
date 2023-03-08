import { Context } from "koa";

function success(
  ctx: Context,
  msg: string = "请求成功",
  code: number = 0,
  data: any = []
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
    code: number = 1,
    data: any = []
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