const DetailController = require('../controller/detail.js');
const Router = require('koa-router');

const childRouter = new Router();

childRouter.get('/getdetail', DetailController.getDetail);

module.exports = childRouter;