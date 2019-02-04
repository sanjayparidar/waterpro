var express=require("express");
var router=express();

router.use("/signupWebService", require("./signupWebService"));
router.use("/loginWebService",require("./loginWebService"));
router.use("/",require("./signup"));
router.use("/login",require("./login"));




module.exports=router;