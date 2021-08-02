const express = require('express');
const app = express();
var server = require('http').createServer(app);
const io = require("socket.io")(server)
const port = 3000
//--------------bigMl----------------------
const ml = require("./bigML");
ml.initMl()
//------------ kafka------------
const kafka_pro = require('./kafkaProduce');
const kafka_con = require('./kafkaConsume');
//--------------Redis---------------
const redis_rec = require("./RedisForArielReciver");
//-------------MongoDB--------------
const mongoRec = require("./MongoDBReciver");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//------------
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/something', (req, res) => res.send("<a href='/send'>Send</a> <br/><a href=''>View</a>"));
app.get('/', (req, res) => {
    var cards = ["All Cars", "Section 1", "Section 2", "Section 3", "Section 4", "Section 5"];
    var num_cars = redis_rec.cars;
    // var num_cars = 100;
    // var cars1 = [{"event_type":"Exit road","enter_section":4,"car_type":"Truck","day":"Friday","hour":"17:41","is_special":"yes","exit_section":2}]
    // var cars2 = [{"event_type":"Exit road","enter_section":4,"car_type":"Truck","day":"Friday","hour":"17:41","is_special":"yes","exit_section":2}]
    // var cars3 = [{"event_type":"Exit road","enter_section":4,"car_type":"Truck","day":"Friday","hour":"17:41","is_special":"yes","exit_section":2}]
    // var cars4 = [{"event_type":"Exit road","enter_section":4,"car_type":"Truck","day":"Friday","hour":"17:41","is_special":"yes","exit_section":2}]
    // var cars5 = [{"event_type":"Exit road","enter_section":4,"car_type":"Truck","day":"Friday","hour":"17:41","is_special":"yes","exit_section":2}]

    var cars1 = redis_rec.car_Gdetails1
    var cars2 = redis_rec.car_Gdetails2
    var cars3 = redis_rec.car_Gdetails3
    var cars4 = redis_rec.car_Gdetails4
    var cars5 = redis_rec.car_Gdetails5
    res.render("./pages/index", {mongoRec: mongoRec, cards: cards, num_cars, cars1: cars1, cars2: cars2, cars3: cars3, cars4: cars4, cars5: cars5 });

})
server.listen(port, () => console.log(`Ariel app listening at http://localhost:${port}`));