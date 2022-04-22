var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var mongoURL="mongodb://admin:India2020@172.30.75.153:27017";
const dbname = "sampledb";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/db', function(req, res, next) {
  console.log('inside db.....')
  mongoClient.connect(mongoURL,(err,res)=>{
    if(err){
      console.log("error connecting db");
    }
    else{
      const db = res.db(dbname);
      console.log('db connected name ::',db)
      db.collection("catalog").find({}).toArray((err,res)=>{
        if(err){
          console.log('err in collection')
        }
        else{
          console.log(res)
        }
      });
      res.close();
    }
  })
 });
module.exports = router;
