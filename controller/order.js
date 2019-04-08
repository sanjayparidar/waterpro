var express=require("express");
var router=express.Router()
var numberofbottle=require("../model/numberofbottle");

var order = require("../model/order");
var add_cart=require("../model/add_cart");
var orderhistory=require("../model/orderhistory");


router.post("/",function(req,res){

// 	add_cart.findWhere({userid:req.body.userid},function(err,result){
// 		    numberofbottle.find(function(err,result2){
// 		req.body.discounttotal=result[0].discounttotal				
// 	      order.insert(req.body,function(err,result1){
// 		     for(let i=0; i<result.length; i++){
// 				 result[i].paymentid=req.body.paymentid
// 				 for(let j=0; j<result2.length; j++){
// 					 if(result[i].category=result2[j].category){
//                          numberofbottle.updateWhere({category:result[i].category},{Quentity:result2[j].Quentity-result[i].Quentity},function(err,result){
							 
// 						 });
// 					 }
// 				 }				 
// 			 } 		
// 		  orderhistory.insert(result,function(err,result){			
// 		   add_cart.remove({userid:req.body.userid},function(err,result){
// 			res.send(result1.ops)             
// 		  });
// 		});	     
// 	  });
//    });	
// });


var category=JSON.parse(req.body.category);
var avelabelQuentity=JSON.parse(req.body.avelabelQuentity);
var Quentity=JSON.parse(req.body.Quentity);
// console.log(category,avelabelQuentity,Quentity)
// var order1={"userid":req.body.userid,"paymentid":req.body.paymentid,"total":req.body.total,"discounttotal":req.body.discounttotal}

//  console.log(order1 ,"console 37 ++++++++++++++++++++++++++++_______________")
// add_cart.findWhere({userid:req.body.userid},function(err,result){
// 	   console.log("helllo")
// 	   if(result.length==0){
// 		   var result = [ ]
//            for(var i=0; i<category.length; i++){
// 			   result[i].paymentid=req.body.paymentid
// 			   result[i].Quentity=req.body.Quentity[i]
// 			   result[i].userid=req.body.userid
// 			   result[i].productid=req.body.productid[i]
			   
// 		   }
// 	   }
// 	   order.insert(order1,function(err,result1){
//                 for(let i=0; i<result.length; i++ ){
// 					result[i].paymentid=req.body.paymentid
// 					result[i].Quentity=req.body.Quentity[i]
// 					numberofbottle.updateWhere({category:category[i]},{Quentity:avelabelQuentity[i]-Quentity[i]},function(err,result2){

// 					});
// 				}
// 				orderhistory.insert(result,function(err,result3){
// 					add_cart.remove({userid:req.body.userid},function(err,result4){
// 						res.send(result1.ops)

// 					});
// 				});
// 	   });
//    });
		 console.log('hello')
		 
      order.insert(req.body,function(err,result){
		  for(let i=0; i<category.length; i++){
			numberofbottle.updateWhere({category:category[i]},{Quentity:avelabelQuentity[i]-Quentity[i]},function(err,result2){
				
				
			});  
		  }
		  add_cart.remove({userid:req.body.userid},function(err,result){
			var data ={ }
			data.response="success"
			
		
			res.send(data)
			})
	  })
});

router.get('/viewallorder',function(req,res){
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