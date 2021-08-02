// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה
const uuid = require("uuid");
const Kafka = require("node-rdkafka");
const forRedis = require("./RedisForSender");
const forMongo = require("./MongoDBSender");
const bigml = require("./bigML");
const { log } = require("mathjs");
const kafkaConf = {
  "group.id": "cloudkarafka-example",
  "metadata.broker.list": "glider-01.srvs.cloudkafka.com:9094,glider-02.srvs.cloudkafka.com:9094,glider-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "gzeps78o",
  "sasl.password": "MkmoKnhRZ_DTIzFGh46CyvsHdrFyoAAQ",
  "debug": "generic,broker,security"
};

const prefix = "gzeps78o-";
const topic = `${prefix}new`; // send to this topic
const producer = new Kafka.Producer(kafkaConf);

const genMessage = m => new Buffer.alloc(m.length, m);
//const prefix = process.env.CLOUDKARAFKA_USERNAME;

const topics = [topic];
const consumer = new Kafka.KafkaConsumer(kafkaConf, {
  "auto.offset.reset": "beginning"
});

consumer.on("error", function (err) {
  console.error(err);
});
consumer.on("ready", function (arg) {
  
  console.log(`Consumer ${arg.name} ready`);
  consumer.subscribe(topics);

  consumer.consume();
});
var EnterCars = 0 ; 
consumer.on("data", function (m) 
{
  var m_json = JSON.parse(m.value.toString());
  forRedis.addToRedis( m.value.toString());
  forMongo.addToMongoDB( m.value.toString());
  bigml.myPrediction(m_json)
  EnterCars++
  module.exports.enter_cars = EnterCars ;
});
consumer.on("disconnected", function (arg) {
  process.exit();
});
consumer.on('event.error', function (err) {
  console.error(err);
  process.exit(1);
});
consumer.on('event.log', function (log) {
  // console.log(log);
});
consumer.connect();
