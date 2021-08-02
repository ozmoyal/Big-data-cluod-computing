var bigml = require('bigml');
// const BigML = require('bigml/lib/BigML');


var connection = new bigml.BigML('YONATAN1231230', 'e84d53bc37f1636f29b4478de538db72fbd28f47')
var pred;
var connection2;
var myModelInfo;


module.exports.initMl = () => {

var source = new bigml.Source(connection);
source.create('./pred.csv', function (error, sourceInfo) {
  if (!error && sourceInfo) {
    var dataset = new bigml.Dataset();
    dataset.create(sourceInfo, function (error, datasetInfo) {
      if (!error && datasetInfo) {
        var model = new bigml.Model();
        model.create(datasetInfo, function (error, modelInfo) {
          if (!error && modelInfo) {
            var prediction = new bigml.Prediction(connection);
            connection2 = connection
            prediction.create(modelInfo )
            myModelInfo = modelInfo
            pred = prediction      
          }
        });
      }
    });
  }
});
}

module.exports.myPrediction = (param) => {
var localModel = new bigml.LocalModel(myModelInfo, connection)
localModel.predict({"car_type":param["car_type"],"day":param["day"]},function(error,pred1){
  console.log("param",param)

  console.log(pred1.prediction)
})
}

// module.exports.addToMl = (param) => {
//   console.log("preddddd",pred)
//   PredictionML(pred, param)

// }
// function PredictionML(predict, param) {

//   // var myString = predict.toString()
//   // var getRnum = myString.substr(myString.indexOf('.'));
//   // var getLnum = myString.substr(0, myString.indexOf('.'));
//   // getRnum = parseFloat(getRnum)
//   // getLnum = parseFloat(getLnum)

//   // if (getRnum > 0.5) {
//   //   getLnum = getLnum + 1
//   // }
//   // console.log("redis getLnum--------------", getLnum)
//   console.log("exit sectiooonnn = = = =", param['exit_section'])
//   // console.log("redis data--------------", redis_rec.car_Gdetails1['exit_section'])
//   // conf_mat[param['exit_section']][getLnum]++
//   // for (let i = 1; i < 6; i++) {
//   //   for (let j = 1; j < 6; j++) {
//   //     console.log(conf_mat[i][j])
//   //   }
//   // }




//   //   conf_mat[1][1]=predict
//   // console.log("conf!!",conf_mat[1][1])

// }
// // module.exports = { runBigML: runBigML }