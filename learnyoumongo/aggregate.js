var mongo = require('mongodb').MongoClient
var size = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'
var match = {$match: {size:size}}
var group = {$group: {_id:'total', total:{$avg:'$price'}}}

mongo.connect(url, function(err, db){
	if (err) throw err
	var collection = db.collection('prices')
	collection.aggregate([match, group]).toArray(function(err, results){
		if (err) throw err; 
		if (!results.length){
			throw new Error('No results found')
		}
		var o = results[0];
		console.log(Number(o.total).toFixed(2)); 
		db.close(); 
	})
})
