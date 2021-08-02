const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://bigData:Daniel10@cluster0.anrrn.mongodb.net/arielDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports.addToMongoDB = ( param ) => {
    var myObj = JSON.parse( param )
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("arielDB");
        dbo.collection("Cars").insertOne(myObj, function (err, res) {
            if (err) throw err;
            db.close();
        });
    });
}