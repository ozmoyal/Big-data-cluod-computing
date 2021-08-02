const { create } = require('mathjs');
const { MongoClient } = require('mongodb');
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

function mongoReciver() {
  const uri = "mongodb+srv://bigData:Daniel10@cluster0.anrrn.mongodb.net/arielDB?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("arielDB");
    dbo.collection("Cars").find({}, { projection: { is_special: 0, _id: 0 } }).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      var delayInMilliseconds = 10000; //10 second
      setTimeout(function () {
        createCSV(result)
      }, delayInMilliseconds);
    });
  });
}

function getData() {
  const uri = "mongodb+srv://bigData:Daniel10@cluster0.anrrn.mongodb.net/arielDB?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("arielDB");
    dbo.collection("Cars").find({}, { projection: { is_special: 0, _id: 0, event_type: 0 } }).toArray(function (err, result) {
      if (err) throw err;
      db.close();
  });
});
}

function createCSV(data) {
  const json2csvParser = new Json2csvParser({ header: true });
  const csvData = json2csvParser.parse(data);
  fs.writeFile("pred.csv", csvData, function (error) {
    if (error) throw error;
    console.log("Write pred.csv successfully!");
  });
}

module.exports = { mongoReciver: mongoReciver, createCSV: createCSV, getData: getData }