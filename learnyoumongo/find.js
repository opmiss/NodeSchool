var minage = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo"; 

var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db){
	// db gives access to the database
	db.collection('parrots').find({age:{$gt:minage}}).toArray(function(err, documents){
		console.log(documents); 
		db.close(); 
	})
})
