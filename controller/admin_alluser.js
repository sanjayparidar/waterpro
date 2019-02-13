var express=require("express");
var router=express.Router();
var user=require("../model/user");
router.get("/",function(req,res){
   user.find(function(err,res){
   res.send(result);
   });
});
module.exports=router;