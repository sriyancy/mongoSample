var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var mongoURL="mongodb://localhost:27017";
const dbname = "sampledb";


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/db', function(req, res, next) {
 mongoClient.connect(mongoURL,(err,res)=>{
   if(err){
     console.log("error connecting db");
   }
   else{
     const db = res.db(dbname);
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