var express=require("express");
var router=express();

router.use("/signupWebService", require("./signupWebService"));
router.use("/loginWebService",require("./loginWebService"));
router.use("/otp",require("./otp"));
router.use("/profile",require("./profile"));
router.use("/updateprofile",require("./updateprofile"));
router.use("/logout",require("./logout"));



router.use("/adminpanel",require("./adminlogin"));
router.use("/admin_dashboard",require("./admin_dashboard"));
router.use("/admin_addproduct",require("./admin_addproduct"));
router.use("/admin_viewproduct",require("./admin_viewproduct"));
router.use("/admin_alluser",require("./admin_alluser"));
router.use("/admin_addpromo",require("./promocode"));
router.use("/admin_viewpromo",require("./admin_viewpromocode"));
// router.use("/",require("./signup"));
// router.use("/login",require("./login"));




module.exports=router;