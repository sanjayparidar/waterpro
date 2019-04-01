var express=require('express');
var router=express.Router();
var fs = require('fs');
router.get("/",function(req,res){
    
    
    var filePath = "/https://udtalks.sgp1.digitaloceanspaces.com/17_6YXPE2GJUI2LOKVEL7.pdf";
    // fs.readFile(filePath , function (err,data){
    //     console.log(data)
    //     var pagedata={title:"home",data:data,};
    //     res.render("admin/pdf", pagedata)
    // });
    fs.readFile(filePath,  function(err, contents) {
        console.log(err)
    });
});


module.exports=router;