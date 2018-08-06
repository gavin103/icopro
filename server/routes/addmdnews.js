const AddMdNewsController = require('../controller/addmdnews.js');
const Router = require('koa-router');

const childRouter = new Router();

childRouter.post('/addmdnews', AddMdNewsController.addMdNews);

module.exports = childRouter;