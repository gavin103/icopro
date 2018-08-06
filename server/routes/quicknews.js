const QuickNewsController = require('../controller/quicknews.js');
const Router = require('koa-router');

const childRouter = new Router();

childRouter.get('/getquicknews', QuickNewsController.getQuickNews);

module.exports = childRouter;