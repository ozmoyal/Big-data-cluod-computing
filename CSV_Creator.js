const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

function createCSV(data) {
  const json2csvParser = new Json2csvParser({ header: true });
  const csvData = json2csvParser.parse(data);
  fs.writeFile("pred.csv", csvData, function (error) {
    if (error) throw error;
    console.log("Write pred.csv successfully!");
  });
}