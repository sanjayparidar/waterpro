var express=require("express");
var router=express.Router();
orderhistory=require("../model/orderhistory");

router.post("/",function(req,res){
    orderhistory.findWhere({userid:req.body.userid},{paymentid:},function(err,result){
        resizeBy.send(result)
    });
});