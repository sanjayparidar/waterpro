var express=require("express");
var router=express.Router();
var contect=require("../model/contect");
router.post("/",function(req,res){
    contect.insert(req.body,function(err,result){
        res.send(result.ops)
    });

});

router.get("/",function(req,res){
    contect.find(function(err,result){
        res.send(result)
    });
});

router.post('/delete',function(req,res){
    contect.remove(req.body._id,function(err,result){
        res.send("success full remove")
    });
});

module.exports=router;