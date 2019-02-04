var express=require("express");
var app=express();



app.use(express.json());
var bodyparser=require("body-parser");
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyparser());

app.use(require("./controller/default"));

app.listen(process.env.PORT || 2000,function(){
	console.log("server");
});