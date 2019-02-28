var express=require("express");
var router=express.Router();

router.get("/:userid/:productid",function(req,res){
   // add_cart.findWhere({productid:req.params.productid},{userid:req.params.userid},function(err,result){
   // 	if(result.length>0){
   //  add_cart.updatewhere({productid:req.params.productid},{userid:req.params.userid},req.body,function(err,result){
   //      add_cart.findWhere({userid=req.body.userid},function(err,result){
   //      	res.send(result)
   //      });
            	
   //  });
   // 	 }else{
   	 	add_cart.insert(req.params,function(err,result){
   	 		res.send(result);

   	 	});
   // 	 }
   // });
});

router.get("/:userid",function(req,res){
  add_cart.find({userid:req.body.userid},function(err,result){
    res.send(result)
  });
});



module.exports=router;
    
