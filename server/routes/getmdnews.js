const GetMdNewsListController = require('../controller/getmdnews.js');
const Router = require('koa-router');
const childRouter = new Router();
childRouter.get('/getmdnews', GetMdNewsListController.getMdNewsList);
module.exports = childRouter;