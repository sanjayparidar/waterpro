var express=require("express");
var router=express.Router();
var order=require("../model/order");
var Mongo=require("mongodb");

router.post("/",function(req,res){
    // {userid:req.body.userid},{paymentid:req.body.paymentid}
    order.findWhere({ _id : Mongo.ObjectId(req.body.id)},function(err,result){
        var category=JSON.parse(result[0].category)
        var  Quentity=JSON.parse(result[0].Quentity);
        var price=JSON.parse(result[0].price)
        var array=[ ]
        for( var i=0; i<category.length; i++){
            var obj={ }
            obj.category=category[i]
            obj.Quentity=Quentity[i]
            obj.paymentid=result[0].paymentid
            obj.price=price[i]
            obj.orderid=result[0].orderid
            array.push(obj)
        }
        res.send(array)
        // res.send(result)
    });
});

router.get('/viewallorder',function(req,res){
    order.find(function(req,res){
        var category=JSON.parse(result[0].category)
        var  Quentity=JSON.parse(result[0].Quentity);
        var price=JSON.parse(result[0].price);
        var array=[ ]
        for( var i=0; i<category.length; i++){
            var obj={ }
            obj.category=category[i]
            obj.Quentity=Quentity[i]
            obj.paymentid=result[0].paymentid
            obj.price=price[i]
            obj.orderid=result[0].orderid
            array.push(obj)
        }
        res.send(array)
        // res.send(result)
    });
    })



module.exports=router;