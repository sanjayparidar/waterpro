var express=require("express");
var router=express();

router.use("/signupWebService", require("./signupWebService"));
router.use("/loginWebService",require("./loginWebService"));
router.use("/otp",require("./otp"));
router.use("/profile",require("./profile"));
router.use("/updateprofile",require("./updateprofile"));
router.use("/logout",require("./logout"));
router.use("/subscription",require("./subscription"));
router.use("/forgotpassword",require("./forgotpassword"));



router.use("/adminpanel",require("./adminlogin"));
router.use("/admin_dashboard",require("./admin_dashboard"));
router.use("/admin_addproduct",require("./admin_addproduct"));
router.use("/admin_viewproduct",require("./admin_viewproduct"));
router.use("/admin_alluser",require("./admin_alluser"));
router.use("/addpromo",require("./addpromocode"));
router.use("/viewpromo",require("./viewpromocode"));
// router.use("/",require("./signup"));
// router.use("/login",require("./login"));




module.exports=router;