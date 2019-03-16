var express=require("express");
var router=express.Router()
var numberofbottle=require("../model/numberofbottle");

var order = require("../model/order");
var add_cart=require("../model/add_cart");
var orderhistory=require("../model/orderhistory");
router.post("/",function(req,res){

	add_cart.findWhere({userid:req.body.userid},function(err,result){
		    numberofbottle.find(function(err,result2){

		req.body.discounttotal=result[0].discounttotal				
	      order.insert(req.body,function(err,result1){
		     for(let i=0; i<result.length; i++){
				 result[i].paymentid=req.body.paymentid
				 for(let j=0; j<result2.length; j++){
					 if(result[i].category=result2[j].category){
                         numberofbottle.updateWhere({category:result[i].category},{Quntity:result2[j].Quntity-result[i].Quntity},function(err,result){
							 res.send("success");
						 });
					 }

				 }
				 
			 } 
		
		  orderhistory.insert(result,function(err,result){
			
		   add_cartremove({userid:req.body.userid},function(err,result){
			res.send(result1)
              
		  });
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