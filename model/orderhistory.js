var connection = require("../config/connect");
var config = require("../config/db");

module.exports.insert=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('orderhistory').insert(obj, cb);
	});
}
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('orderhistory').find().toArray(cb);
	});
}
module.exports.findWhere=function(obj,cb){
	connection.init(function(err,client){
		var db =client.db(config.dbName);
		db.collection('orderhistory').find(obj).toArray(cb);
	})
}


module.exports.remove=function(obj,cb){
	connection.init(function(err,client){
		var db=client.db(config.dbName);
		db.collection('orderhistory').remove(obj,cb)
	});
}