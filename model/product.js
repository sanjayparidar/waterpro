var connection = require("../config/connect");
var config = require("../config/db");

module.exports.insert=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').insert(obj, cb);
	});
}
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').find().toArray(cb);
	});
}
module.exports.findWhere=function(obj,cb){
	connection.init(function(err,client){
		var db =client.db(config.dbName);
		db.collection('product').find(obj).toArray(cb);
	})
}

module.exports.update=function(where, obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').update(where, {$set : obj}, cb);
	});

}
module.exports.remove=function(obj,cb){
	connection.init(function(err,client){
		var db=client.db(config.dbName);
		db.collection('product').remove(obj,cb)
	});
}