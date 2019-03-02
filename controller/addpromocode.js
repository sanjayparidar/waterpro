var express=require("express");
var router=express.Router();
var promo=require("../model/promocode");


router.post("/",function(req,res){
	console.log(req.body)
    promo.insert(req.body,function(err,result){
      console.log(result)
    });
});


router.post("/update", function(req, res){
	
	var id = req.body.id;
	delete req.body.id;
	
	product.update({_id : Mongo.ObjectId(id)}, req.body, function(err, result){
		res.send("product update");
	});
});


module.exports=router;