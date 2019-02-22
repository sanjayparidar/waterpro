var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");
const Nexmo = require('nexmo');
var jwt=require("jsonwebtoken");
var verifytoken=require("../helper/verifytoken");

router.post("/",function(req,res){
  

	user.findWhere({_id:Mongo.ObjectId(req.body.id)},function(err,result){
		
		  var result =result[0]
      // console.log(result)
      if(result.otp==req.body.otp){
     	     result.otpstatus="otpsuccess";
     	     user.updateWhere({_id : Mongo.ObjectId(req.body.id)}, result, function(err, result){
		          var data={ };
              data.response="otpsuccess";
              res.send(data);
	         });
      }else{
     	     data={ };
           data.response="otp not match"
     	     data.id=req.body.id;
     	     res.send(data);
       }
	  });

});


router.post("/resendotp",function(req,res){
 
 
	user.findWhere({_id:Mongo.ObjectId(req.body.id)},function(err,result){
		  var result=result[0];
      var random=Math.floor(Math.random() *9000)+1000;
      result.otp=random.toString();
        // console.log(result)
      var mobilenumber="91"+result.mobile;
      const nexmo = new Nexmo({
            apiKey: "76c0446d",apiSecret: "cnGkIdULJerMTR47"
      });
      nexmo.message.sendSms("919691889808" ,mobilenumber,random,(err, responseData) => {
        if (err) {
        // console.log(err);
        } else {
          
        // console.log(responseData);
          user.updateWhere({_id:Mongo.ObjectId(req.body.id)},result,function(err,result){
            
          var data={ };
          data.response="resendotp";
          data.id=req.body.id;
          console.log(data)
          res.send(data)      
          });
         }
       }
     );
  });

});

module.exports=router;






