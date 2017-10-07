/**
 * @author chenxw
 * @description
 * @version
 * @update 2017-10-07
 */
//加载express模块
var express = require('express');
var path = require('path');
//设置端口
var port = process.env.PORT || 3000;
//启动web服务器
var app = express();
var bodyParser = require('body-parser');
//cookie管理
var cookieParser = require('cookie-parser');
app.use(cookieParser());
// //设置视图的根目录
// app.set('views', './app/views/pages');
// //设置默认的模块引擎
// app.set('view engine', 'jade');
//给表单数据格式化
app.use(bodyParser.json()); // for parsing application/json
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(express.static(path.join(__dirname, 'public')))
//请求设置(跨域设置)
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    /*让options请求快速返回*/
    if (req.method == "OPTIONS") res.send(200);
    else next();
});
// //监听端口
// app.listen(port);
// var logger = require('morgan');
// if ('development' === app.get('env')) {
//     app.set('showStackError', true);
//     app.use(logger(':method :url :status'));
//     app.locals.pretty = true;
// }

//测试
// app.get('/', function(req, res) {
//         res.send('Hello World');
//         // res.send('Hello World');
//     })
//  POST 请求
app.post('/login', function(req, res) {
    console.log("主页 POST 请求");
    // 输出 JSON 格式
    var response = {
        "userName": "nodetest",
        "token": "121243542352"
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/file_upload', function(req, res) {

    console.log(req.files[0]); // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})


// app.get('/', function(req, res) {
//     res.send('Hello World');
//     console.log("Cookies: ", req.cookies)
// })

var server = app.listen(port, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

// require('./config/routes')(app)
// console.log('Rspt started on port' + port);