var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");


router.post("/",function(req,res){
     console.log("updateprofile")
	var id= req.body.id;
	delete req.body.id;
	user.updateWhere({ _id : Mongo.ObjectId(id)}, req.body, function(err, result){
		res.send(result)
	});
});


module.exports=router;