var express=require("express");
var router=express.Router();
var offpayment = require("../model/offpayment");
var onpayment = require("../model/onpayment");


router.post('/online',function(req,res){    
	var razorpay_payment_id=req.body.razorpay_payment_id;
	rzp.payments.fetch('razorpay_payment_id').then((data) => {
     var paymentid=data.id
     var amount=data.amount
}).catch((error) => {
  // failure
})
});


router.post('/offline',function(req,res){
   offpayment.insert(req.body,function(err,res){
   });
});

  



