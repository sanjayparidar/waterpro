var express=require("express");
var router=express.Router();

var order = require("../model/order");
var add_cart=require("../model/add_cart");
var orderhistory=require("../model/orderhistory");
router.post("/",function(req,res){

	add_cart.findWhere({userid:req.body.userid},function(err,result){
		
		req.body.discounttotal=result[0].discounttotal				
	  order.insert(req.body,function(err,result1){
		     for(let i=0; i<result.length; i++){
				 result[i].paymentid=paymentid
			 } 
		  orderhistory.insert(result,function(err,result){
		 add_cart.remove({userid:req.body.userid},function(err,result){
			res.send(result1)
              
		  });
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

  



