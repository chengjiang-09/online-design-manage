import { BinaryLike, createHash } from "crypto";
import { Context } from "koa";
import Jwt from "../utils/auth";

/**
 * 随机六位数字验证码
 *
 * @returns 六位验证码
 */
export function getVerifyCode(): string {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code = code.concat(Math.floor(Math.random() * 10).toString());
  }
  return code;
}

/**
 * 简单的校验封装
 *
 * @param value 需要校验的字段
 * @param rules 正则校验规则
 * @returns
 */
export function verifyRegularByRE(value: string, rules: RegExp): boolean {
  let re = new RegExp(rules);
  return re.test(value);
}

/**
 * MD5加密
 *
 * @param value 需要加密的串
 * @returns 加密后的字符串
 */
export function encryptionMD5(value: BinaryLike) {
  return createHash("md5").update(value).digest("hex");
}

/**
 * 判断对象是否为空
 *
 * @param object 对象
 * @returns ture为空
 */
export function isEmpty(object: object): boolean {
  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
}

/**
 * 获取规格化后的时间信息
 *
 * @returns 当前时间信息例如：2023-3-9 9:15:32
 */
export function getDate(): string {
  let timer = new Date();

  let Y = timer.getFullYear();
  let M = formatDate(timer.getMonth());
  let d = formatDate(timer.getDate());

  let h = formatDate(timer.getHours());
  let m = formatDate(timer.getMinutes());
  let s = formatDate(timer.getSeconds());

  return `${Y}-${M}-${d} ${h}:${m}:${s}`;
}

function formatDate(time: number) {
  return time > 9 ? time : `0${time}`;
}

/**
 * 从token获取用户信息
 *
 * @param ctx
 * @returns
 */
export function getUserDataByToken(ctx: Context) {
  const token = ctx.headers.authorization?.split(" ")[1];

  const { userData, error } = Jwt.verify(token as string);

  if (error) {
    return null;
  }

  return userData?.payload;
}

/**
 * 获取北京时间（UTC + 8小时）
 * 
 * @returns 
 */
export function getNowTimeInChina(): string {
  const timestamp = new Date().getTime() + 8 * 60 * 60 * 1000; // 获取当前时间戳并加上8个小时的毫秒数
  const datetime = new Date(timestamp)
    .toISOString()
    .slice(0, 19)
    .replace("T", " "); // 转换为 MySQL datetime 格式
  return datetime;
}
