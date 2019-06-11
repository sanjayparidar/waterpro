var express=require("express");
var router=express.Router();
var promo=require("../model/promocode");
var express=require("express");
var mongo=require("mongodb")
router.post("/",function(req,res){
	console.log(req.body)
    promo.insert(req.body,function(err,result){
      res.send(result.ops)
    });
});

 
router.post("/update", function(req, res){
	
	var id = req.body.id;
	delete req.body.id;
	
    promo.update({_id : Mongo.ObjectId(id)}, req.body, function(err, result){
		res.send("product update");
	});
});


module.exports=router;