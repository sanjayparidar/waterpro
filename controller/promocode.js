var express=require("express");
var router=express.Router();
var promo=("./model/promocode")

router.get("/",function(req,res){
	var pagedata={title:"addpromo",pagename:"admin/admin_addpromo"}
	res.render("layout",pagedata);
});

router.post("/",function(req,res){
    promo.insert(req.body,function(err,result){

    });
});


module.exports=router;