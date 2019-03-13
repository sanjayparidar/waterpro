var express = require('express');
var router = express.Router();
var promo = require('../model/promocode');
var Mongodb = require('mongodb');
var fs=require('fs');
var path=require("path");
 
router.get("/",function(req, res){

	promo.find(function(err, result){
             res.send(result)
			
		// console.log(result);
	});
});

router.get("/delete/:id",function(req,res){
	console.log("hello")
    promo.findWhere({_id:Mongodb.ObjectId(req.params.id)},function(err,result){
    	
        promo.remove({_id:Mongodb.ObjectId(req.params.id)},function(err,result){
    	res.send("product delete");

    	});
    	
    });
});
		
router.get("/update/:id", function(req, res){
	console.log(req.query);
	console.log(req.params);
	var id = req.params.id;
	
	product.findWhere({ _id : Mongodb.ObjectId(req.params.id) }, function(err, result){
		res.send(result[0]);
		
	});
});

		
router.get("/", function(req, res){

	promo.find(function(err, result){
             res.send(result)
			
		// console.log(result);
	});
});		

router.post("/findpromo", function(req, res){
         console.log("+_++++++++++")
	promo.findWhere({pcode:req.body.promocode},function(err, result){
             res.send(result)
			
		// console.log(result);
	});
});


module.exports=router;
