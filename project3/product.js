var express=require('express');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var myRouter=require('./routes/zxpRoutes.js');
var app=express();
var ejs=require('ejs');
app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(myRouter);

//ejs
app.set('views',__dirname+'/public/pages');
app.engine('html',ejs.__express);
app.set('view engine','html');
app.get('/zxp-product',function (req,res) {
    res.render('zxp-product')
});
app.get('/zxp-male',function (req,res) {
    res.render('zxp-male')
});
app.get('/zxp-woman',function (req,res) {
    res.render('zxp-woman')
});
app.get('/zxp-activity',function (req,res) {
    res.render('zxp-activity')
});

app.listen(1122,function () {
    console.log('ok');
});
var ws=require('ws');
var appws=new ws.Server({host:'172.16.8.75',port:1122});

var arr=new Array();

appws.on('connection',function (err) {
    console.log('他来啦');

    arr.push(err);

    err.on('message',function (data) {
        console.log(data);

        for(var i=0;i<2;i++){
            arr[i].send(data)
        }
    })
});


