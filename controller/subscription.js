var express=require("express");
var router=express.Router();

router.post("/",function(req,res){
   add_cart.findWhere({productid:req.body.productid},{userid:req.body.userid},function(err,result){
   	if(result.length>0){
    add_cart.updatewhere({productid:req.body.productid},{userid:req.body.userid},req.body,function(err,result){
        add_cart.findWhere({userid=req.body.userid},function(err,result){
        	res.send(result)
        });
            	
    });
   	 }else{
   	 	add_cart.insert(req.body,function(err,result){
   	 		res.send(result);

   	 	});
   	 }
   });
});

module.exports=router;
    
