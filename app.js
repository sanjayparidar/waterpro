var express=require("express");
var app=express();

var bodyparser=require("body-parser");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');

var upload = require('express-fileupload');
var cors=require("cors")
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname+"/public"));

app.use(express.json());
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret : "TSS", saveUninitialized: true}));
app.use(flash());
app.use(upload());
app.use(function(req, res, next){
	res.locals.session=req.session;
	next();
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(require("./controller/default"));

app.listen(process.env.PORT || 2000 ,function(){
	console.log("server")
})


// for(let i=0; i<this.table.length; i++){
//     console.log("hello") 
//     if(localStorage.getItem('category')){
//       console.log("hello3")
    
//       var cate=localStorage.getItem('category')
    
   
//     // var cate = category.split(",");
//     console.log(cate,"arrayarrayarray")
//     console.log(this.table[i].Quentity,"ssssssssssssssssssss")
//   if(cate.includes(this.table[i].category)){
//     console.log(localStorage.getItem('Quentity'),"+_+_+_+_+_+_+-------------------================______");
  
  
//   }else{
//       this.Quentityy=JSON.parse(localStorage.getItem('Quentity'));
//       this.pricee=JSON.parse(localStorage.getItem('price'));
//       this.categoryy=JSON.parse(localStorage.getItem('category'));
//      this.categoryy.push(this.table[i].category)
//      this.Quentityy.push(this.table[i].Quentity)
//      this.pricee.push(this.table[i].price)
//      console.log(this.Quentityy)
     
       
//     localStorage.setItem('category' ,JSON.stringify(this.categoryy));
//     localStorage.setItem( 'Quentity', JSON.stringify(this.Quentityy));
//     localStorage.setItem('price',JSON.stringify(this.pricee))
//     console.log(localStorage.getItem('Quentity'),"this is quentity in 109")
     
  
  
//   }
//   }else{
//     console.log("hello2")
//       this.categoryy.push(this.table[i].category)
//       this.Quentityy.push(this.table[i].Quentity);
//       this.pricee.push(this.table[i].price);
//       localStorage.setItem('category' ,JSON.stringify(this.categoryy));
//       localStorage.setItem( 'Quentity', JSON.stringify(this.Quentityy));
//       localStorage.setItem('price',JSON.stringify(this.pricee))
  
      
  
//   }
//   }
  
//   var Quentity=localStorage.getItem('Quentity')
//   console.log(Quentity,"129 array")
  
//   //  console.log(Quentity,"this is quntirty vlaue of arraty+++++++++")
  
//    for(let i=0; i<this.table.length; i++) {
//      console.log(this.table.length,"this is table lenth 7777777777777777777777777")
//      var Quentity=localStorage.getItem('Quentity')
//      console.log(Quentity,"134 array")
//      var price=localStorage.getItem('price')
//      this.table[i].Quentity =JSON.parse(Quentity)[i];
//      this.table[i].price=JSON.parse(price)[i];
//   }
//   console.log(this.table,"fsdfsdfsdfdsf+_+______________+_+_++fdfsdffsd")
  
  
  
    
      
//     for(let i=0; i<this.table.length; i++){
//       // this.table[i].Quentity=1
    
//        this.table[i].discountprice=this.table[i].price*(100-this.table[i].discount)/100 
//        this.table[i].price=this.table[i].price 
         
      
//       if(i==0){
//         this.total=parseInt(this.table[i].price)
//         console.log(this.total,"+_+_+_+_+_+_+ ssssssssssss")
//         this.discounttotal=parseInt(this.table[i].discountprice)
//         localStorage.setItem(this.discounttotal, this.discounttotal);
//         localStorage.setItem(this.total, this.total);
    
//           // console.log("=-=-=-=-=-=-",localStorage.getItem(discounttotal,"+_+_+_+_+_+_+_+_+_+_+_+_+_+_"))
//           console.log(localStorage.getItem(this.discounttotal));
         
  
//       }else{
//         this.total=this.total+parseInt(this.table[i].price)
//         console.log(this.total)
//         this.discounttotal=this.discounttotal+parseInt(this.table[i].discountprice)
//         localStorage.setItem(this.discounttotal,this.discounttotal);
//         localStorage.setItem(this.total, this.total);
//         console.log(localStorage.getItem(this.discounttotal),"+_+_+_+_+_+_+");
//         // console.log(this.table[i].total)
//       }   
//   }