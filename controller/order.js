var express=require("express");
var router=express.Router();

var order = require("../model/order");
var add_cart=require("../model/add_cart");

router.post("/",function(req,res){
	console.log("hello","++++++++++++++++++++++++______________________")
	add_cart.findWhere({userid:req.body.userid},function(err,result){
		var productid=result.map(i=>{
			         var res={}
			         res.productid=i.productid
					  
			          return res
					});
		req.body.productid=productid
		req.body.discounttotal=result[0].discounttotal				
	  order.insert(req.body,function(err,result1){
		 
		  add_cart.remove({userid:req.body.userid},function(err,result){
			res.send(result1)
              
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

  



