var express=require("express");
var router=express.Router();
var promo=require("../model/promocode");

router.get("/",function(req,res){

	// var pagedata={title:"addpromo",pagename:"admin/admin_addpromo"}
	// res.render("admin_layout",pagedata);
});

router.post("/",function(req,res){
	console.log(req.body)
    promo.insert(req.body,function(err,result){
      console.log(result)
    });
});


module.exports=router;