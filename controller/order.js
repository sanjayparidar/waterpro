var express=require("express");
var router=express.Router();

var order = require("../model/order");
var add_cart=require("../model/add_cart");

router.post("/",function(req,res){
	add_cart.findWhere({userid:req.body.userid},function(err,result){
	  order.insert(result,function(err,result){
		  res.send(result)
		  add_cart.remove({userid:req.body.userid},function(err,result){
              
		  });

	     
	  });
   });	
});

router.post('/viewallorder',function(req,res){
	order.find(function(err,result){
        res.send(result)
	});
});

router.post("/vieworder",function(req,res){
	order.findWhere({userid:req.body.userid},function(err,result){
		res.send(result)
	});
});


module.exports=router;

  



