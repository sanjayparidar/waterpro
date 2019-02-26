var express = require('express');
var router = express.Router();
var product = require('../model/product');
var Mongodb = require('mongodb');
var fs=require('fs');
var path=require("path");

router.get("/", function(req, res){

	product.find(function(err, result){
			
		var path = path.resolve("public/product_image/"+result[0].image);
		console.log(path)
		var pagedata={result:result,file:path}
		// console.log(pagedata)
             res.render(pagedata);
			// var pagedata = { title : "View Category", pagename : "admin/admin_viewproduct", data : result};
			// res.render("admin_layout", pagedata);
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
		 res.send(prodata)
			// var pagedata = { title : "Update Product", pagename : "admin/admin_updateproduct", prodata : prodata};
			// res.render("admin_layout", pagedata);
		
		
	});


});


module.exports=router;
	