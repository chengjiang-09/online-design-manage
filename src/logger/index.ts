import { configure, getLogger } from 'log4js'
import config from '../configs/config'

configure(config.log)

export const dbLogger = getLogger('db')
export const reqLogger = getLogger('req')
export const redisLogger = getLogger('redis')
export const finalInfoLogger = getLogger('finalInfo')
export const smtpLogger = getLogger('smtp')
export default getLogger