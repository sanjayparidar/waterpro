var express=require("express");
var router=express.Router();
var numberofbottle=require("../model/numberofbottle");

router.post("/",function(req,res){
    numberofbottle.insert(req.body,function(err,result){
        var data={ }
        data.response="success"
        res.send(data)
    });
});

router.get("/",function(req,res){
    numberofbottle.find(function(err,result){
        res.send(result)
    });
});



module.exports=router;