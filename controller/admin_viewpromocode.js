var express = require('express');
var router = express.Router();
var promo = require('../model/promocode');
var Mongodb = require('mongodb');
var fs=require('fs');
var path=require("path");

router.get("/", function(req, res){

	promo.find(function(err, result){
             // res.send(result)
			var pagedata = { title : "View promo", pagename : "admin/admin_viewpromo", data : result};
			res.render("admin_layout", pagedata);
		// console.log(result);
	});
});

router.get("/delete/:id",function(req,res){
    product.findWhere({_id:Mongodb.ObjectId(req.params.id)},function(err,result){
    	console.log(result)
        var image=result[0].image

    	var oldfilepath = path.resolve("public/product_image/"+image);
		fs.unlinkSync(oldfilepath);

    	});
        product.remove({_id:Mongodb.ObjectId(req.params.id)},function(err,result){
    	res.redirect("/admin_viewproduct");
    	
    });
});
		
router.get("/update/:id", function(req, res){
	console.log(req.query);
	console.log(req.params);
	var id = req.params.id;
	
	product.findWhere({ _id : Mongodb.ObjectId(req.params.id) }, function(err, result){
		var prodata=result[0];
		// console.log(result);
		
			var pagedata = { title : "Update Product", pagename : "admin/admin_updateproduct", prodata : prodata};
			res.render("admin_layout", pagedata);
		
		
	});


});


module.exports=router;