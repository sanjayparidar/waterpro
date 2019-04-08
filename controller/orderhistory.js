var express=require("express");
var router=express.Router();
var order=require("../model/order");
var Mongo=require("mongodb");

router.post("/",function(req,res){
    // {userid:req.body.userid},{paymentid:req.body.paymentid}
    order.findWhere({ $and: [ {userid:req.body.userid}, { _id : Mongo.ObjectId(id)} ] },function(err,result){
        var category=JSON.parse(result[0].category)
        var  Quentity=JSON.parse(result[0].Quentity);
        var array=[ ]
        for( var i=0; i<category.length; i++){
            var obj={ }
            obj.category=category[i]
            obj.Quentity=Quentity[i]
            obj.paymentid=result[0].paymentid
            obj.price=result[0].price
            obj.orderid=result[0].orderid
            array.push(obj)
        }
        res.send(array)
        // res.send(result)
    });
});


module.exports=router;