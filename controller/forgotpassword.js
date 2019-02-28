var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");
const Nexmo = require('nexmo');


router.post("/",function(req,res){
	var m = req.body.mobile;
	console.log(req.body)
	user.findWhere({mobile:m},function(err,result){
		var result=result[0]
		console.log(result)
		var random=Math.floor(Math.random()*9000)+1000;
		  result.otp=random.toString();
		  console.log(result)
		  var mobilenumber="91"+result.mobile;

		  const nexmo = new Nexmo({
            apiKey: "76c0446d",apiSecret: "cnGkIdULJerMTR47"
      });
		  nexmo.message.sendSms("919691889808" ,mobilenumber,random,(err, responseData) => {
        if (err) {
        // console.log(err);
        } else {
          
           console.log(result)
          user.updateWhere({_id:Mongo.ObjectId(result._id)},result,function(err,result1){
            	if(result1){
      

          var data={ };
          data.response="sendotp";
          data.result=result;
          res.send(result)
            	}
          
          // res.send(data)      
          });
         }
       
      });
	});
});

router.post("/otp",function(req,res){
	console.log(req.body)
user.findWhere({_id:Mongo.ObjectId(req.body.id)},function(err,result){

          var result=result[0]
           var data={ }
           console.log(result.otp)
          if(result.otp==req.body.otp){
           
           data.response="successfull otp"
           data.result=result;
           res.send(data)
       }else{
       	// console.log("otp not match")
       	data.response="otp not match"
         res.send(data)
       }
	});
     
});
	module.exports=router;


router.post("/reset",function(req,res){
    user.findWhere({_id:Mongo.ObjectId(req.body.id)},function(err,result){
      console.log(result)
    if(result){
       user.updateWhere({_id:Mongo.ObjectId(req.body.id)},req.body,function(err,result){
       res.send(result)       
       })

    }
    });
 });