var express=require("express");
var router=express.Router();
var order=require("../model/order");

router.post("/",function(req,res){
    order.findWhere({userid:req.body.userid},{paymentid:req.body.paymentid},function(err,result){
        var category=JSON.parse(result.category)
        var  Quentity=JSON.parse(result.Quentity);
        var array=[ ]
        for( var i=0; i<category.length; i++){
        array[i].category=category[i]
        arrya[i].Quentity=Quentity[i]
        array[i].paymentid=paymentid
        }
        res.send(array)
        // res.send(result)
    });
});


module.exports=router;