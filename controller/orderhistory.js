var express=require("express");
var router=express.Router();
orderhistory=require("../model/orderhistory");

router.post("/",function(req,res){
    orderhistory.findWhere({userid:req.body.userid},{paymentid:req.body.paymentid},function(err,result){
        resizeBy.send(result)
    });
});


module.exports=router;