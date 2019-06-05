const express = require('./node_modules/express');
const router = express.Router({caseSensitive:false,strict:true});
let studentGrads = require("../model/studentGrads");

let id = 0;

router.get('/grads/',function(request,response){
    response.status(200).json({status: 'OK', data : studentGrads});
});

router.get('/grads/:id',function(request,response,next){
    let studId = request.params.id;
    let index = studentGrads.findIndex(s => s.id == studId);
    //console.log(index);
    if(index >= 0){
        return next();
    }
    else{
        return next('There is no student grade with this id.');
    }
}
,function(request,response){
    let studId = request.params.id;
    response.status(200).json({status: 'OK', data : studentGrads.find(s => s.id == studId) });
});
router.post('/grads/',function(request,response){
    let maxId = Math.max.apply(Math, studentGrads.map(function(o) { return o.id; }));
    request.body.id = ++maxId;
    response.status(201).json({status: 'OK', data: studentGrads.push(request.body)});
});

router.delete('/grads/:id',function(request,response,next){
    let studId = request.params.id;
    let index = studentGrads.findIndex(s => s.id == studId);
    //console.log(index);
    if(index >= 0){
        return next();
    }
    else{
        return next('There is no student grade with this id.');
    }
}
,function(request,response){
    let studId = request.params.id;
    studentGrads = studentGrads.filter(s => s.id != studId);
    response.status(202).json({status: 'OK', data: studentGrads});
});

module.exports =  router ;