var connection = require('../config/connect');
var config = require("../config/db");
module.exports.insert=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('add_cart').insert(obj, cb)
	});
}
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('add_cart').find().toArray(cb);
	});
}

module.exports.findWhere=function(obj,cb){
	connection.init(function(err,client){
		var db =client.db(config.dbName);
		db.collection('add_cart').find(obj).toArray(cb);
	})
}