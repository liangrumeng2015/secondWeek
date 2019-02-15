// 引入路由
const router = require('koa-simple-router');
// 引入controller
const IndexController = require('./IndexController');
const TestController = require('./TestController');
// 实例化
const indexController = new IndexController();
const testController = new TestController();

// 路由注册中心
module.exports = (app)=>{
    app.use(router(_ => {
        _.get('/',indexController.actionIndex());
        _.get('/index.html',indexController.actionIndex());  // 假的静态文件
        _.get('/test',testController.actionIndex());
    }));
}

