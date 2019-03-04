var express=require("express");
var router=express.Router();
var product = require("../model/product");

router.get("/",function(req,res){
	console.log("hellos")
	product.find(function(err,result){
		res.send(result);
	});
});

module.exports=router;