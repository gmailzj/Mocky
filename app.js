// koa 版本号2.2.0
const Koa = require('koa')

// 创建一个Koa对象表示web app本身:
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
// 获取路由
const index = require('./routes/index')

// 控制台打印错误
app.on('error', function(err, ctx) {
    console.log(err);
});

// error handler
onerror(app)

app.use(cors());

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async(ctx, next) => {
    console.dir((ctx.app.context))
    await next();
    // ctx.response.type = 'text/html';
});

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// 静态资源处理
app.use(require('koa-static')(__dirname + '/public'))

// 模板引擎设置
app.use(views(__dirname + '/views', {
    // extension: 'pug',
    extension: 'ejs',
    map: { ejs: 'ejs', html: 'ejs' }
}))

app.use(async function(ctx, next) {
    const start = new Date();
    console.log(start);
    await next();

});

// x-response-time
app.use(async function(ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
// app.use(async(ctx, next) => {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(index.routes(), index.allowedMethods())

module.exports = app