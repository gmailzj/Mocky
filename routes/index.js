const router = require('koa-router')()
const fs = require("fs")
const thunkify = require("thunkify")
const readFile = thunkify(fs.readFile)
const debug = require('debug')('koa');
const uuidv1 = require('uuid/v1');
const config = require('config');

const Mocker = require('../model/mocker');
const fileSystemRepository = require('../services/fileSystemRepository');


router.use(async(ctx, next) => {
    debug('env: %o', process.env);
    await next();
})

// 写入内容
router.post('/', async(ctx, next) => {

    var post = ctx.request.body;
    var mocker = new Mocker(post);
    var [err, uuid] = await fileSystemRepository.save(mocker);
    ctx.body = { "url": `${ctx.request.origin}/${uuid} ` };
})

// 读取内容
router.get(/\/([a-z0-9]{32})$/, async(ctx, next) => {
    var id = ctx.params[0];
    // 获取querystring
    // 文件是否存在
    var [err, mocker] = await fileSystemRepository.getMockFromId(id);
    if (!err) {
        // statuscode
        ctx.status = +mocker.statuscode;
        // contenttype
        ctx.set("Content-Type", mocker.contenttype + "; charset=" + mocker.charset);
        // header
        if (mocker.headerNames.length) {
            for (let i = 0, len = mocker.headerNames.length; i < len; i++) {
                mocker.headerNames[i] && ctx.set(mocker.headerNames[i], mocker.headerValues[i])
            }
        }
        // location
        if (mocker.location) {
            ctx.set("Location", mocker.location);
        }
        ctx.body = mocker.body;
    } else {
        next();
    }
})

router.get('/', async(ctx, next) => {

    //  写cookies
    ctx.cookies.set('username', 'lake');
    ctx.cookies.set('PLAY_LANG', 'en');

    console.log(ctx.request.host, ctx.request.origin);
    // 设置响应输出mime类型
    ctx.response.type = 'text/html';
    // render方法来渲染模板，传递数据
    await ctx.render('index', {
        title: 'home page',
        content: 'this is home page'
    })
})

router.get("/settimeout", async(ctx, next) => {
    var sleep = function(time) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, time);
        })
    };

    var html = "<p>content:</p>";
    console.log('start');
    html += Date.now() + "\n";
    await sleep(100);
    console.log('end');
    html += Date.now() + "\n";
    // ctx.body = html;
    await ctx.render('settimeout', {
        title: 'home page',
        content: html,
        id: 1
    })
})


// 多行注释  cmd+ctrl+/

router.get('/console', async(ctx, next) => {
    var outputs = [];
    outputs.push(ctx.request.host);
    ctx.body = outputs;
})

module.exports = router