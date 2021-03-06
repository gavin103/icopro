const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');

const server = require("http").createServer(app.callback());
server.listen(8888);

const io = require("socket.io")(server);

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
const detailRouter = require('./server/routes/detail.js');
const  quickNewsRouter = require('./server/routes/quicknews.js');
const  addMdNewsRouter = require('./server/routes/addmdnews.js');
const  getMdNewsRouter = require('./server/routes/getmdnews.js');
//装载子路由
router.use('/api', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/api', listRouter.routes(), listRouter.allowedMethods());
router.use('/api', detailRouter.routes(), detailRouter.allowedMethods());
router.use('/api', quickNewsRouter.routes(), quickNewsRouter.allowedMethods());
router.use('/api', addMdNewsRouter.routes(), addMdNewsRouter.allowedMethods());
router.use('/api', getMdNewsRouter.routes(), getMdNewsRouter.allowedMethods());
//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

// app.listen(8888, () => {
//     console.log('The server is running at http://localhost:' + 8888);
// });

// socket.io 聊天室
global.chatMem=[];
io.on("connection", socket => {
  const socketId = socket.id;
  socket.on("sendGroupMsg", data => {
    global.chatMem.push(data);
    while(global.chatMem.length>200){
      global.chatMem.shift();
    }
    io.sockets.emit("getGroupMsg", global.chatMem);
  });
  socket.on("online",data=>{
    io.sockets.emit("resOnline",global.chatMem)
  });
  socket.on("disconnect", data => {
    console.log("disconnect", data);
  });
});

console.log('The server is running at http://localhost:' + 8888);