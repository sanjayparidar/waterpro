var express=require("express");
var router=express.Router();
var order=require("../model/order");

router.post("/",function(req,res){
    // {userid:req.body.userid},{paymentid:req.body.paymentid}
    order.findWhere({ $and: [ {userid:req.body.userid}, {paymentid:req.body.paymentid} ] },function(err,result){
        var category=(result[0].category)
        var  Quentity=JSON.parse(result[0].Quentity);
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