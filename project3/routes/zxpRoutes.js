var express=require('express');

var proCont=require('./../controller/zxpCont.js');
var myRouter=express.Router();

myRouter.post('/zxpProClassic',proCont.zxpProClassic);
myRouter.post('/zxpProPetite',proCont.zxpProPetite);
myRouter.post('/zxpProBlack',proCont.zxpProBlack);
myRouter.post('/zxpProDapper',proCont.zxpProDapper);
myRouter.post('/zxpProClassy',proCont.zxpProClassy);
myRouter.post('/zxpMaleC',proCont.zxpMaleC);
myRouter.post('/zxpMaleB',proCont.zxpMaleB);
myRouter.post('/zxpMaleD',proCont.zxpMaleD);
myRouter.post('/zxpWomClassic',proCont.zxpWomClassic);
myRouter.post('/zxpWomBlack',proCont.zxpWomBlack);
myRouter.post('/zxpWomPetite',proCont.zxpWomPetite);
myRouter.post('/zxpWomDapper',proCont.zxpWomDapper);
myRouter.post('/zxpWomClassy',proCont.zxpWomClassy);
myRouter.post('/zxpWrist',proCont.zxpWrist);
myRouter.post('/zxpWatch',proCont.zxpWatch);
myRouter.post('/zxpLovers',proCont.zxpLovers);

module.exports=myRouter;