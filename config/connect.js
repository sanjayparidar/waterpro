var MongoClient =  require('mongodb').MongoClient;
var url = "mongodb://sanjaypatidar:sanjay96@ds227469.mlab.com:27469/waterpro";
module.exports.init=function(cb){
	MongoClient.connect(url, cb);
	
}