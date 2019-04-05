var express=require('express');
var router=express.Router();
var bulkorder=require("../model/bulkorder");
router.post('/',function(req,res){
    bulkorder.insert(req.body,function(err,result){
      res.send("success")   
    })
});

module.exports=router;