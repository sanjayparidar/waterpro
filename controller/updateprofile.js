var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");
var jwt=require("jsonwebtoken");
var verifytoken=require("../helper/verifytoken");

router.post("/",verifytoken.verifyToken,function(req,res){
    jwt.verify(req.token,'suab',(err,authdata)=>{
		if(authdata){

			console.log(req.body);
	        var id= req.body.id;
	        delete req.body.id;

	        user.updateWhere({ _id : Mongo.ObjectId(id)}, req.body, function(err, result){
		    res.send(result);
	});
		}
		else{
			res.status(400).json("no token given")
		}
	});


     
});
module.exports=router;


