var express=require("express");
var router=express.Router();
var promo=require("../model/promocode");

router.get("/",function(req,res){
    promo.find(function(err,result){
    	res.send(result)
    })
	
});

router.post("/",function(req,res){
	console.log(req.body)
    promo.insert(req.body,function(err,result){
      console.log(result)
    });
});


module.exports=router;