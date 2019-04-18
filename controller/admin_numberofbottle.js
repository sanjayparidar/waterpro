var express=require("express");
var router=express.Router();
var numberofbottle=require("../model/numberofbottle");
var Mongo = require("mongodb");
router.post("/",function(req,res){
    numberofbottle.findWhere({category:req.body.category},function(err,result){
    if(result.length==0){
        numberofbottle.insert(req.body,function(err,result){
            var data={ }
            data.response="success"
            res.send(data)
        });
    }else{
        var data={ }
        data.response="success"
        res.send(data)
    }
    })
   
});

router.get("/",function(req,res){
    numberofbottle.find(function(err,result){
        res.send(result)
    });
});


router.post('/edit',function(req,res){
     console.log(req.body,"_+_+_+_+_+_+_++__+_+_+_+_+___+_+_+_")
    numberofbottle.updateWhere( {_id : Mongo.ObjectId(id)},req.body.Quentity,function(err,result){
        console.log(result)
        var data={ };
        data.response="success"
        res.send(data)
    })
})



module.exports=router;