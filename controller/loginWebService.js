var express=require("express");
var router=express.Router();
var user = require("../model/user");
const { check,validationResult } = require('express-validator/check');
router.post("/",
  
[
  check('mobile').isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
//   check("password").matches("^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}"
// ),
  check("password").matches("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$").withMessage('must be atleast degit ,specil and alph')



  
], (req, res) => {
  
    const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });

  }
    
     

   
   var m = req.body.mobile;
	var p = req.body.password;
user.findWhere( { $and: [ { mobile:m  }, { password:p } ] } , function(err, result){
		var data={ };
		if(result.length==0) // rusername incorrect
		{
		    data.response="unsuccess";
		    data.result=result;
		    // console.log(data)
			res.send(data);
		}
		else
		{   
			
		   if(result[0].otpstatus){     
			data.response="success";
		    data.result=result;
		    // console.log(data)
				res.send(data)
           }else{
           	data.response="please submit otp";
           	data.result=result;
           	res.send(data)
           }
		}
	});

	
});
				
		
			
		

module.exports=router;