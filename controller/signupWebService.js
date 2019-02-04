var express=require("express");
var router=express.Router();
var user = require("../model/user");
const { check,validationResult } = require('express-validator/check');

router.post("/",
    check('name').matches("^[A-Za-z]+$"),
    check('email').isEmail().withMessage("email is must be require"),
    check('mobile').isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
    check('city').matches("^[A-Za-z]+$").withMessage("city must be required"),
    // check("adress").matches("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-,]).{8,}$")
    check('adress').matches("[A-Za-z0-9-,]+$").withMessage("adress must be required"),
    check("state").matches("^[A-Za-z]+$").withMessage("state is must be require"),
    check("lat").isLength({ min: 1 }).withMessage("lat is must be require"),
    check("long").isLength({ min: 1 }).withMessage("lat no. is must be require"),
    check("otp").isLength({ min: 1 }).withMessage("otp no. is must be require"),
    check("IEMI").matches("[0-9]+$").withMessage("IEMI no. is must be require"),
    check("password").matches("^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$").withMessage('must be atleast degit ,specil and alph'),
    check('divceId').isLength({ min: 1 }).withMessage("diveID must be required")
    

	,function(req,res){

        

const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });

  }


	console.log(req.body)
	user.insert(req.body, function(err, result){
		res.redirect("/login")
	});
})

module.exports=router;