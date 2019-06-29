var mysql=require('mysql');

var db=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'project3'
});

var json={
    zxpProClassic:function (fn) {

        let sql=`SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND series.s_name="classic"`;
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    zxpProPetite:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.series=series.id AND goods.id=picture.id AND colour='#F2DCBD' AND series.s_name="classic petite"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpProBlack:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.series=series.id AND goods.id=picture.id AND colour='#F2DCBD' AND series.s_name="classic black"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpProDapper:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.series=series.id AND goods.id=picture.id AND colour='#F2DCBD' AND series.s_name="dapper"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpProClassy:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.series=series.id AND goods.id=picture.id AND colour='#F2DCBD' AND series.s_name="classy"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpMaleC:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND sex='男' AND series.s_name="classic"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpMaleB:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND sex='男' AND series.s_name="classic black"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpMaleD:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND sex='男' AND series.s_name="dapper"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWomClassic:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND series.s_name="classic"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWomBlack:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND series.s_name="classic black"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWomPetite:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND series.s_name="classic petite"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWomDapper:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND colour='#F2DCBD' AND sex='女' AND series.s_name="dapper"`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWomClassy:function (fn) {
        let sql = `SELECT * FROM picture JOIN goods JOIN series ON goods.\`series\`=series.\`id\` AND goods.\`id\`=picture.\`id\` AND sex='女' AND series.s_name="classy" GROUP BY g_name`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWrist:function (fn) {
        let sql = `SELECT * FROM activity JOIN activity_img ON activity.\`id\`=activity_img.\`id\` AND a_group='a1'`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpWatch:function (fn) {
        let sql = `SELECT * FROM activity JOIN activity_img ON activity.\`id\`=activity_img.\`id\` AND a_group='a2'`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
    zxpLovers:function (fn) {
        let sql = `SELECT * FROM activity JOIN activity_img ON activity.\`id\`=activity_img.\`id\` AND a_group='a3'`;
        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },
};

module.exports=json;