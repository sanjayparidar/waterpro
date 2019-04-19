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
	admin.findWhere({username : u , password:p}, function(err, result){
		if(result.length==0)
		{
			var data={ };
			data.response="this user name and password is incorrect"
           res.send(data)
		}
		else
		{  
			var data={ };
			data.response="success"
			data.result=result[0];
			res.send(data)
		}
	});



});

module.exports=router;


