var express=require("express");
var router=express.Router();
var add_cart = require("../model/add_cart");
var product = require("../model/product");
var promo=require("../model/promocode")
var Mongodb=require("mongodb");
var numberofbottle=require("../model/numberofbottle")
  
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
// 4 march
// router.post("/",function(req,res){

// // { $and: [ { price: { $ne: 1.99 } }
//   add_cart.findWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
//     // console.log(result)
//     if(result.length>0){
//         ++result[0].quntity;
//         add_cart.updateWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},result[0],function(err,result){
//         add_cart.findWhere({userid:req.body.userid},function(err,result){
//           res.send(result)
//         });
//    });     
        
//     }else{
//       var quntity=1
//       req.body.quntity=quntity;
      
//         add_cart.insert(req.body,function(err,result){
//          res.send(result.ops);

//        });

//     }
//   });
// });

// router.post("/delete",function(req,res){
//      add_cart.findWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
     
//      if(result[0].quntity>1){
//       --result[0].quntity
//       add_cart.updateWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},result[0],function(err,result){
//         add_cart.findWhere({userid:req.body.userid},function(err,result){
//           res.send(result)
//         });
//       }); 
//      }else{
//        add_cart.remove({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
//            res.send("success full remove")
//        });
//      }
   
//   }); 
// });



// router.post("/clear",function(req,res){
//        add_cart.remove({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
//            res.send("success full remove")
//        });
//      });


// router.get("/:userid",function(req,res){
//    // {$or: [{key1: value1}, {key2:value2}]}
//    add_cart.findWhere({userid:req.params.userid},function(err,result){
//       res.send(result);
//    });

// });



// router.post("/promo",function(req,res){
//    add_cart.findWhere({userid:req.body.userid},function(err,result){
    
//         var product=result.map(i=>{
//          var res={}
//          res.productid=i.productid
          
//           return res
//         });
    
//       add_cart.updateWhere({$and:[{userid:"5c726548cae3e00017beda90"},{$or:product}]},req.body,function(err,result){
//           res.send(result)
          
//       });
//    });
// });

// 4 march


router.post("/",function(req,res){

// { $and: [ { price: { $ne: 1.99 } }
    numberofbottle.findWhere({category:req.body.category},function(err,result){
         
        req.body.Quentity=parseInt(req.body.Quentity)
      
       if(result[0].Quentity >= req.body.Quentity){
          
  add_cart.findWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
      console.log(result.length)
    if(result.length>0){

        
        add_cart.updateWhere({$and:[{productid:req.body.productid},{userid:req.body.userid}]},req.body,function(err,result){
        add_cart.findWhere({userid:req.body.userid},function(err,result){
          res.send(result)
        });
   });     
        
    }else{

        
         add_cart.insert(req.body,function(err,result){
         res.send(result.ops);

       });
    }
  });
}
  else{
    res.send("out of stock")
  }
});
});

router.get("/:userid",function(req,res){
  
//   console.log(req.params)
    add_cart.findWhere({userid:req.params.userid},function(err,result){
      console.log(result,"+++++++++++++++++++++_________________----------------------")
    res.send(result)
    
  });
});


router.post("/clear",function(req,res){
       add_cart.remove({$and:[{productid:req.body.productid},{userid:req.body.userid}]},function(err,result){
        var result1={}
        result1.response="success full remove"   
        res.send(result1)
       });
     });

router.post("/clearcart",function(req,res){
  add_cart.remove({userid:req.body.userid},function(err,result){
    var result1={}
    result1.response="success full remove"   
    res.send(result1)      
   });
});

router.post("/promo",function(req,res){
   add_cart.findWhere({userid:req.body.userid},function(err,result){
    
        var product=result.map(i=>{
         var res={}
         res.productid=i.productid
          
          return res
        });
    
      add_cart.updateWhere({$and:[{userid:req.body.userid},{$or:product}]},req.body,function(err,result){
          res.send(result)
      });
  
   });
});

module.exports=router;




    
