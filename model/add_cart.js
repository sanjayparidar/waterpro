var connection = require('../config/connect');
var config = require("../config/db");
module.exports.insert=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('add_cart').insert(obj, cb)
	});
}