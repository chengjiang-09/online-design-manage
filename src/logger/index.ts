import { configure, getLogger } from 'log4js'
import config from '../configs/config'

configure(config.log)

export const dbLogger = getLogger('db')
export default getLogger