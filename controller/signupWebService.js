var express=require("express");
var router=express.Router();
var user = require("../model/user");
const Nexmo = require('nexmo');

// router.use(bodyParser.urlencoded({ extended: true }));
const { check,validationResult } = require('express-validator/check');

router.post("/",
    check('name').matches("^[A-Za-z- ]+$"),
    check('email').isEmail().withMessage("email is must be require"),
    check('mobile').isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
    check('city').matches("^[A-Za-z]+$").withMessage("city must be required"),
    // check("adress").matches("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-,]).{8,}$")
    check('address').matches("[A-Za-z0-9-, ]+$").withMessage("adress must be required"),
    check("state").matches("^[A-Za-z- ]+$").withMessage("state is must be require"),
    check("lat").isLength({ min: 1 }).withMessage("lat is must be require"),
    check("long").isLength({ min: 1 }).withMessage("lat no. is must be require"),
    // check("otp").isLength({ min: 1 }).withMessage("otp no. is must be require"),
    check("IEMI").matches("[0-9]+$").withMessage("IEMI no. is must be require"),
    check("password").matches("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$").withMessage('must be atleast degit ,specil and alph'),
    check('deviceId').isLength({ min: 1 }).withMessage("diveID must be required")
	,function(req,res){
    
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
     return res.status(422).json({ errors: errors.array() });
     }
     else{
	// console.log(req.body)
      user.findWhere({ mobile:req.body.mobile}, function(err, result){
        // console.log(result.length)
        if(result.length==0){
          var today = ("0"+new Date().getDate()).slice(-2)+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getFullYear()).slice(-4)+' '+("0"+new Date().getHours()).slice(-2)+':'+("0"+new Date().getMinutes()).slice(-2);
          req.body.date=today;

          var random=Math.floor(Math.random() *10000)+1000;
          // req.body.otp=random;
          req.body.otp=random.toString();
          
          var mobilenumber="91"+req.body.mobile;
          
          const nexmo = new Nexmo({
            apiKey: "76c0446d",apiSecret: "cnGkIdULJerMTR47"
            });
              nexmo.message.sendSms("919691889808" ,mobilenumber,random,(err, responseData) => {
               if (err) {
        // console.log(err);
              } else {

        // console.log(responseData);
          user.insert(req.body, function(err, result){
          
             data.response="success";
             data.result=result.ops;
             res.send(data);
          });
         }
       }
     );

       }else{
        data={ };
        data.response="user allredy resister"
        res.send(data)
       }
     });   
   }
 });
     
module.exports=router;