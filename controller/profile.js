var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");
var jwt=require("jsonwebtoken");
var verifytoken=require("../helper/verifytoken");


router.get("/edit/:id", verifytoken.verifyToken,function(req,res){
	jwt.verify(req.token,'suab',(err,authdata)=>{
		if(authdata){
			user.findWhere({ _id : Mongo.ObjectId(req.params.id)}, function(err, result){
		// console.log(result);
		    res.send(result)
	    });
		}
		else{
			res.status(400).json("no token given")
		}
	});

	
});

module.exports=router;