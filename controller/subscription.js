var express=require("express");
var router=express.Router();
var add_cart = require("../model/add_cart");
var product = require("../model/product");
var Mongodb=require("mongodb")

// router.get("/:userid/:productid",function(req,res){
 
//    // add_cart.findWhere({productid:req.params.productid},{userid:req.params.userid},function(err,result){
//    // 	if(result.length>0){
//    //  add_cart.updatewhere({productid:req.params.productid},{userid:req.params.userid},req.body,function(err,result){
//    //      add_cart.findWhere({userid=req.body.userid},function(err,result){
//    //      	res.send(result)
//    //      });
            	
//    //  });
//    // 	 }else{

    
//    	 	add_cart.insert(req.params,function(err,result){
//    	 		res.send(result.ops);

//    	 	});
  
// });

// router.get("/:userid",function(req,res){
  
//   console.log(req.params)
//   add_cart.findWhere({userid:req.params.userid},function(err,result){
//     res.send(result)
//     product.findWhere({_id:Mongodb.ObjectId(req.params.id)},function(err,result){
//       console.log(result)
//     });
//   });
// });

router.post("/",function(req,res){

// { $and: [ { price: { $ne: 1.99 } }
  add_cart.findWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
    // console.log(result)
    if(result.length>0){
        ++result[0].quntity;
        add_cart.updateWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},result[0],function(err,result){
        add_cart.findWhere({userid:req.body.userid},function(err,result){
          res.send(result)
        });
   });     
        
    }else{
      var quntity=1
      req.body.quntity=quntity;
      
        add_cart.insert(req.body,function(err,result){
         res.send(result.ops);

       });

    }
  });
});

router.post("/delete",function(req,res){
     add_cart.findWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
     
     if(result[0].quntity>1){
      --result[0].quntity
      add_cart.updateWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},result[0],function(err,result){
        add_cart.findWhere({userid:req.body.userid},function(err,result){
          res.send(result)
        });
      }); 
     }else{
       add_cart.remove({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
           res.send("success full remove")
       });
     }
   

  }); 
})


router.post("/")


module.exports=router;
    
