var express = require('express');
var router = express.Router();
var admin = require("../model/admin");

// router.get('/', function(req, res){
// 	console.log("hello")
	
// 	var pagedata = {title : "Admin Login", pagename : "admin/index", message : req.flash('msg')};
// 	res.render("admin_layout", pagedata);
// });

// router.get("/logout", function(req, res){
// 	req.session.destroy();
// 	res.redirect("/");
// });

router.post("/", function(req, res){
	// console.log(req.body);
	var u = req.body.username;
	var p = req.body.password;
	admin.findWhere({username : u}, function(err, result){
		if(result.length==0)
		{
			res.send("this is username and password incorrect")
		}
		else
		{
			if(result[0].password==p)
			{
				res.send(result[0])
			}
			else
			{
				res.send("this user password is incorrect")
			}
		}
	});



});

module.exports=router;


