var proModule=require('./../module/zxpModule.js');

var json={
    zxpProClassic:function (req,res) {
        proModule.zxpProClassic(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpProPetite:function (req,res) {
        proModule.zxpProPetite(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpProBlack:function (req,res) {
        proModule.zxpProBlack(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpProDapper:function (req,res) {
        proModule.zxpProDapper(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpProClassy:function (req,res) {
        proModule.zxpProClassy(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpMaleC:function (req,res) {
        proModule.zxpMaleC(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpMaleB:function (req,res) {
        proModule.zxpMaleB(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpMaleD:function (req,res) {
        proModule.zxpMaleD(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWomClassic:function (req,res) {
        proModule.zxpWomClassic(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWomBlack:function (req,res) {
        proModule.zxpWomBlack(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWomPetite:function (req,res) {
        proModule.zxpWomPetite(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWomDapper:function (req,res) {
        proModule.zxpWomDapper(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWomClassy:function (req,res) {
        proModule.zxpWomClassy(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWrist:function (req,res) {
        proModule.zxpWrist(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpWatch:function (req,res) {
        proModule.zxpWatch(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
    zxpLovers:function (req,res) {
        proModule.zxpLovers(function (err,data) {
            if (err){
                console.log('数据错误'+err)
            } else {
                res.send({error:0,data:data})
            }
        })
    },
};

module.exports=json;