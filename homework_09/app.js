const express = require('express')
const app = express();
//const mongo = require('mongodb')
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient

const client = new mongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

app.use(bodyParser.json())
let db;
let collection;

app.use('/', (req, res, next) => {
    if (!db) {
        client.connect((err) => {
            db = client.db('USZipCodes')
            collection = db.collection('zipCodes')
            //req.db = db
            next()
        })
    }
    else {
        //req.db = db
        collection = db.collection('zipCodes')
        next()
    }
})

app.get('/1/', async (req, res) => {
    let result = await collection.aggregate([
        { '$match' : { state: "WA" } }
    ]).toArray()
    res.status(200).json({ status: 'OK', data: result })
})

app.get('/2/', async (req, res) => {
    try {
        let result = await collection.aggregate([
            { '$match': { pop: { '$lt': 5000 } } },
            { '$limit': 5 }
        ]).toArray()
        res.status(200).json({ status: 'OK9', data: result })
    }
    catch (err) {
        res.json({ err })
    }
})

app.get('/3/', async (req, res) => {
    let result = await collection.aggregate([
        {$group: { _id: { city : "$city", state : "$state"},
                    count: { $sum: 1 }}},
        {$match: { count: { $gt: 1} } },
        {$sort : {"_id.state" : 1 , "_id.city" : 1}},
        {$project : { _id : 0 ,
            city : "$_id.city",
            state: "$_id.state",
            count : 1}},
        
        { '$limit': 10 }
    ]).toArray()
    res.status(200).json({ status: 'OK', data: result })
})

app.get('/4/', async (req, res) => {
    let result = await collection.aggregate([
        {$group: { _id: { state : "$state", city : "$city"},
                    population: { $sum: "$pop" }}},
        {$sort : {"_id.state" : 1 , "population" : 1}},
        {$group : { _id : "$_id.state" ,
            city: {$first : "$_id.city"},
            population : {$first : "$population"},}},
        {$sort : {population : 1 , _id : 1}},
        
        { '$limit': 10 }
    ]).toArray()
    res.status(200).json({ status: 'OK', data: result })
})

app.listen(4000, () => console.log('app now listen on port 4000'));