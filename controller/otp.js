var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");


router.post("/",function(req,res){
	user.findWhere({_id:Mongo.ObjectId(req.body.id)},function(err,result){
		
		var result =result[0]
     if(result.otp==req.body.otp){
     	result.otpstatus="otpsuccess";
     	user.updateWhere({_id : Mongo.ObjectId(req.body.id)}, result, function(err, result){
		var data={ };
        data.otp="otpsuccess";
        res.send(data);
	});
     }
	});
});


module.exports=router;