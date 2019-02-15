var MongoClient =  require('mongodb').MongoClient;
var url = "mongodb://sanjaypatidar:sanjay96@ds227469.mlab.com:27469/waterpro";

// var url = "mongodb://localhost:27017";

module.exports.init=function(cb){
	MongoClient.connect(url, cb);
	
}