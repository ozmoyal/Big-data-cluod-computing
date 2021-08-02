var bigml = require('bigml');
var conf_mat = [];

for (var i = 0; i < 6; i++) {
  conf_mat[i] = new Array(6);
}

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    conf_mat[i][j] = 0
  }
}

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
              var prediction = new bigml.Prediction();
              connection2 = connection
              prediction.create(modelInfo, { "": "" })
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
  var localModel = new bigml.LocalModel('model/6107cd33cb4f96592d0e701c')
  localModel.predict({ "enter_section": param['enter_section'], "car_type": param['car_type'], "day": param['day'] }, function (error, pred1) {
    // console.log(pred1.prediction)
    var predict = get_predict(pred1.prediction)
    conf_mat[param['exit_section']][predict]++;
    module.exports.confision_matrix = conf_mat;
    // console.log(conf_mat)
  })
}

function get_predict(predict) {
  var myString = predict.toString()
  var getRnum = myString.substr(myString.indexOf('.'));
  var getLnum = myString.substr(0, myString.indexOf('.'));
  getRnum = parseFloat(getRnum)
  getLnum = parseFloat(getLnum)
  if (getRnum > 0.5) {
    getLnum = getLnum + 1
  }
  return getLnum;
}
// // module.exports = { runBigML: runBigML }