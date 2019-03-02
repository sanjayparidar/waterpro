var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
	product.find(function(err,result){
		res.send(result);
	});
});

module.exports=router;