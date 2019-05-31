
var fs = require('fs');
var path = require('path');

function rdFileSync(req,res){
    var dt = Date.now();
    console.log(path.join('D:\\','test.mkv'));
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    var f1 = fs.readFileSync(path.join('D:\\','test.mkv'), 'utf8');
    //res.write("" + Date.now() - dt);
    res.end(f1);
    console.log('done1');
}

function rdFile(req,res){
    var dt2 = Date.now();
    var f2 = fs.readFile(path.join('D:\\','test.mkv'), 'utf8',function(err,data){
        //res.write(Date.now() - dt2);
        res.end(data);
        console.log('done2');
    });
}

function useStream(req,res){
    var dt3 = Date.now();
    var f3 = fs.createReadStream(path.join('D:\\','test.mkv'), 'utf8');
    var allChunks = '';
    f3.on('data',function(chunk){
        allChunks += chunk;
    });
    f3.on('end',function(){
        //res.write(Date.now() - dt3);
        res.end(allChunks);
        console.log('done3');
    });

}

//subject.subscribe(rdFileSync);

var http = require('http');
var s1 = http.createServer();
var s2 = http.createServer(rdFile).listen(5500);
var s3 = http.createServer();

s1.on('request',rdFileSync).listen(5000);
//s2.on('request',rdFile).listen(5500);
s3.on('request',useStream).listen(5550);
