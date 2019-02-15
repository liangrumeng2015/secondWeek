
const Koa = require('koa');  // 安装koa   #npm install koa --save

const render = require('koa-swig');  // koa-swig引入的    #npm install koa-swig --save
const path = require('path');

const co = require('co');   // koa2  co引入的    #npm install co --save
const serve = require('koa-static');   // 安装koa-static   <容错>
const app = new Koa();

const errorHandler = require('./middlewares/errorHandler');   // 引入 middleware里面的内容

const log4js = require('log4js');   // 引入log4js 

const config = require('./config');

app.use(serve(config.staticDir));

app.context.render = co.wrap(render({
    root: path.join(config.viewDir),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));

// 配置log4环境,  node记录的都是逻辑和业务错误、http日志
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/book.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

errorHandler.error(app,logger);    // 容错 404
//注入路由机制
require('./controllers')(app);   //自动会找到 controllers/index.js

// process.env.NODE_ENV      (package.json文件里面有修改)



//启动服务
app.listen(config.port,()=>{
    console.log('项目启动完毕🍺');
})

// app.on('error');
// process.on

// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
//     console.log(1);
//     await next();
//     console.log(6);
// });

// app.use(async (ctx, next) => {
//     console.log(2);
//   await next();
//   console.log(5);
// });

// app.use(async ctx => {
//     console.log(3);
//   ctx.body = 'Hello World';
//   console.log(4);
// });

// app.listen(3000);

//nodejs洋葱模型：      执行顺序：  1 2 3 4 5 6
// 使用洋葱模型，来进行容错处理