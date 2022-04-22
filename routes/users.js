var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
// const mongodb = require('mongodb');
// var mongoClient = mongodb.MongoClient;
// var mongoURL="mongodb://admin:India2020@172.30.75.153:27017";
// const dbname = "sampledb";

>>>>>>> 61e56fea135876855cd2c8b09b3d4410f3fc056d

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
<<<<<<< HEAD
=======
// router.get('/db', function(req, res, next) {
//  mongoClient.connect(mongoURL,(err,res)=>{
//    if(err){
//      console.log("error connecting db");
//    }
//    else{
//      const db = res.db(dbname);
//      db.collection("catalog").find({}).toArray((err,res)=>{
//        if(err){
//          console.log('err in collection')
//        }
//        else{
//          console.log(res)
//        }
//      });
//      res.close();
//    }
//  })
// });


>>>>>>> 61e56fea135876855cd2c8b09b3d4410f3fc056d

module.exports = router;
