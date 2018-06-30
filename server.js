const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');

app.use(cors());

//router
const Router = require('koa-router');

//父路由
const router = new Router();

//bodyparser:该中间件用于post请求的数据
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//引入子路由
const loginRouter = require('./server/routes/user.js');
const listRouter = require('./server/routes/list.js');
//装载子路由
router.use('/api', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/api', listRouter.routes(), listRouter.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3389, () => {
    console.log('The server is running at http://localhost:' + 3389);
});