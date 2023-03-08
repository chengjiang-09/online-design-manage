import dotenv from 'dotenv'
dotenv.config()
import db from './db'
db()

import Koa from 'koa'
import router from './routers'

const app = new Koa()

app.use(router.routes())

function run(port: any){
    return app.listen(port, () => {
        console.log(`server is running at http://127.0.0.1:${port}`);
    })
}

export default run