const express = require('express');
const app = express();
var server = require('http').createServer(app);
const io = require("socket.io")(server)
const port = 3000
//--------------bigMl----------------------
const ml = require("./bigML");
// ml.initMl()
//------------ kafka------------
const kafka_pro = require('./kafkaProduce');
const kafka_con = require('./kafkaConsume');
//--------------Redis---------------
const redis_rec = require("./RedisForReciver");
//-------------MongoDB--------------
const mongoRec = require("./MongoDBReciver");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//------------
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/something', (req, res) => res.send("<a href='/send'>Send</a> <br/><a href=''>View</a>"));
var get_acc = 0 

function getAcc(matrix){
var sum = 0 ;
var correct = 0;
for(var i = 1 ; i < 6 ; i++){
    for(var j = 1 ; j < 6 ; j++){
        sum += matrix[i][j]
        if(i==j){
            correct += matrix[i][j]
        }
    }
}
var acc = correct/sum*100; 
return acc;
}
app.get('/', (req, res) => {
    var total_exit_cars = redis_rec.totalExitCars;
    var entered_cars = kafka_con.enter_cars;
    var matrix = ml.confision_matrix
    get_acc =  getAcc(matrix)
    var num = Number(get_acc).toFixed(3);
    var num_cars = redis_rec.cars;
    var cards = ["Current", "Section 1", "Section 2", "Section 3", "Section 4", "Section 5","Total Entered","Total Exited"];
    var cars1 = redis_rec.car_Gdetails1
    var cars2 = redis_rec.car_Gdetails2
    var cars3 = redis_rec.car_Gdetails3
    var cars4 = redis_rec.car_Gdetails4
    var cars5 = redis_rec.car_Gdetails5
    res.render("./pages/index", {entered_cars : entered_cars ,total_exit_cars:total_exit_cars , num : num, matrix : matrix ,mongoRec: mongoRec, cards: cards, num_cars, cars1: cars1, cars2: cars2, cars3: cars3, cars4: cars4, cars5: cars5});

})
server.listen(port, () => console.log(`Ariel app listening at http://localhost:${port}`));