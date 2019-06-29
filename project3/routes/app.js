var express=require('express');
//引入日志
var morgan=require('morgan');
//引入post
var bodyParser=require('body-parser');
var mysql=require('mysql');

//建立数据库连接
var db=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'project3',
});

//搭建服务
var app=express();
//配置静态文件访问目录
app.use(express.static(__dirname+'./../public'));

//配置日志
app.use(morgan('dev'));
//配置post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/lwadd',function (req,res) {
    console.log(req.body.s_name);
    console.log(req.body.size);
    console.log(req.body.colour);
    var sql=`SELECT * 
FROM goods JOIN series JOIN picture
ON goods.id=picture.\`id\` AND goods.\`series\`=series.\`id\` 
WHERE s_name='${req.body.s_name}' AND size='${req.body.size}' AND colour='${req.body.colour}'
`;

    db.query(sql,function (err,data) {
        if(err){
            console.log('错误' + err);
        }else{
            console.log(data);
            res.send({error:0,data:data})
        }
    })

});

app.post('/Ring',function (req,res) {

    var sql=`SELECT *
FROM goods JOIN series JOIN picture
ON goods.\`series\`=series.\`id\` AND  goods.id=picture.\`id\`
WHERE  s_name='Ring'   `;

    db.query(sql,function (err,data) {
        if(err){
            console.log('失败' + err);
        }else{
            console.log(data);
            res.send({error:0,data:data})
        }
    })
});


app.post('/Aset',function(req,res){
    var sql=`SELECT *
FROM goods JOIN series JOIN picture
ON goods.\`series\`=series.\`id\` AND  goods.id=picture.\`id\`
WHERE s_name='PETITE' `;
    db.query(sql,function(err,data){
        if(err){
            console.log('失败' + err);
        }else{
            console.log(data);
            res.send({error:0,data:data})
        }
    })
});




















//配置端口号
app.listen(2222,function () {
    console.log('项目启动了')
});
