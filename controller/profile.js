var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");


router.get("/edit/:id",function(req,res){

	user.findWhere({ _id : Mongo.ObjectId(req.params.id)}, function(err, result){
		// console.log(result);
		res.send(result)
	});
});

module.exports=router;