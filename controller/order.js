var express=require("express");
var router=express.Router();
const Razorpay = require('razorpay');
var onpayment = require("../model/onpayment");

router.post("/",function(req,res){
	order.insert(req.body,function(err,res){
		res.send(result.ops)
	});
});

router.get('/',function(req,res){
	order.find(function(err,result){
        res.send(result)
	});
});
module.exports=router;

  



