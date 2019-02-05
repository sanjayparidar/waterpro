var express=require("express");
var router=express.Router();
var user = require("../model/user");
var Mongo = require("mongodb");
const Nexmo = require('nexmo');

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
     }else{
     	data={ };
     	data.id=req.body.id;
     	res.send(data);
     }
	});
});


router.post("/resendotp",function(req,res){
	console.log("hello")
	user.findWhere({_id:Mongo.ObjectId(req.body.id)},function(err,result){
		var result=result[0];

        var random=Math.floor(Math.random() *10000)+1000;
        result.otp=random.toString();
        var mobilenumber="91"+result.mobile;
        const nexmo = new Nexmo({
            apiKey: "76c0446d",apiSecret: "cnGkIdULJerMTR47"
            });
              nexmo.message.sendSms("919691889808" ,mobilenumber,random,(err, responseData) => {
               if (err) {
        // console.log(err);
              } else {

        // console.log(responseData);
          data={ };
          data.resendotp="resendotp";
          res.send(data)      
         }
       }
     );


	})

})



module.exports=router;