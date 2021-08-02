// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה
const uuid = require("uuid");
// const bigml = require("./bigML");
// const forRedis = require("./RedisForSender");
// const forMongo = require("./MongoDBSender");
const Kafka = require("node-rdkafka");
const simulate = require("./simulator");
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


producer.on("ready", function (arg) {
  console.log(`producer Ariel is ready.`);
  simulate.sim(publish)
});
producer.connect();
//publish is a name can be any name...
publish = function (msg) {
  m = JSON.stringify(msg);
  // forRedis.addToRedis( m);
  // forMongo.addToMongoDB( m);
  // bigml.myPrediction(msg)

  producer.produce(topic, -1, genMessage(m), uuid.v4());  //Send to KAFKA
  //producer.disconnect();   
}
