const mongo = require('mongodb')
const express = require('express');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/',require("./dbconnection"));

app.get('/lectures/', async function(request,response){
    let result = await request.db.collection('lectures').find({}).toArray();
    response.status(200).json({status: 'OK', data : result});
});

app.get('/lectures/:id',async function(request,response,next){
    let lecId = new mongo.ObjectID(request.params.id);
    let result = await request.db.collection('lectures').findOne({_id : lecId});
    //console.log(index);
    if(result){
        return next();
    }
    else{
        return next('There is no Lecture with this id.');
    }
}
,async function(request,response){
    let lecId = new mongo.ObjectID(request.params.id);
    let result = await request.db.collection('lectures').findOne({_id : lecId});
    response.status(200).json({status: 'OK', data : result });
});

app.post('/lectures/',async function(request,response){
    //console.log(request.body);
    await request.db.collection('lectures').insertOne(request.body,function(err,docInserted){
        response.status(201).json({status: 'OK', data: 'Success : ${docInserted}' });
    });
    
});

app.delete('/lectures/:id', async function(request,response,next){
    let lecId = new mongo.ObjectID(request.params.id);
    let result = await request.db.collection('lectures').findOne({_id : lecId});
    if(result){
        return next();
    }
    else{
        return next('There is no Lecture with this id.');
    }
}
,async function(request,response){
    let lecId = new mongo.ObjectID(request.params.id);
    await request.db.collection('lectures').remove({_id : lecId},function(err,removed){
        console.dir(removed + 'document removed.');
        response.status(202).json({status: 'OK', data: removed});
    });
});

app.get('/search/:q',async function(request,response,next){
    let lecName = request.params.q;
    let result = await request.db.collection('lectures').findOne({lecture : lecName});
    //console.log(index);
    if(result){
        return next();
    }
    else{
        return next('There is no Lecture with this id.');
    }
}
,async function(request,response){
    let lecName = request.params.q;
    let result = await request.db.collection('lectures').find({lecture : lecName}).toArray();
    response.status(200).json({status: 'OK', data : result });
});

app.use(function(err,req,res,next){
    console.error(err);
    res.status(500).send(err);
});

app.listen(3300, (e) => console.log('app listen on port 3000'));