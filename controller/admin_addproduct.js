var express=require("express");
var router=express.Router();
 var product = require("../model/product");
 var changename = require("../helper/changefilename");
 var fs = require('fs');
 var path = require('path');
 var Mongo=require('mongodb');

 router.get("/", function(req, res){
	
		var pagedata = {title : "Add Product", pagename : "admin/admin_addproduct", message : req.flash("msg")}
	res.render("admin_layout", pagedata);
	});

 router.post("/", function(req, res){

	var file = req.files.image;
	var newname = changename(file.name);
	var filepath = path.resolve("public/product_image/"+newname);
	// console.log(x);
	file.mv(filepath, function(err){
		if(err){
			console.log(err);
			return;
		}
		req.body.image=newname;
		// console.log(req.body);
		product.insert(req.body, function(err, result){
			// console.log(result);
			req.flash("msg", "Product Add Successfuly");
			res.redirect("/admin_addproduct");
		});
	});
});


 router.post("/update", function(req, res){
	// console.log(req.body);
	var id = req.body.id;
	var image = req.body.image;
	delete req.body.id;
	// console.log(req.files);
	if(req.files.image)//{}
	{
	delete req.body.image;
		var file = req.files.image;
		var newname = changename(file.name);
		var filepath = path.resolve("public/product_image/"+newname);
		file.mv(filepath);
		req.body.image = newname;
		var oldfilepath = path.resolve("app/public/product_image/"+image);
		fs.unlinkSync(oldfilepath);

	}
	product.update({_id : Mongo.ObjectId(id)}, req.body, function(err, result){
		res.redirect("/admin_viewproduct");
	});
});

	
module.exports=router;