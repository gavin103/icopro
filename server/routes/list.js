const ListController = require('../controller/list.js');
const Router = require('koa-router');

const childRouter = new Router();

childRouter.get('/getlist', ListController.getList);

module.exports = childRouter;