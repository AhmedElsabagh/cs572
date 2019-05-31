const { Subject } = require('rxjs');
const subject = new Subject();

const url = require('url');
var http = require('http');
const { fork } = require('child_process');
var s = http.createServer();

function readFileFromChild(reqres) {
    var childProcess = fork('readtheFile.js');
    const myurl = url.parse(reqres.req.url, true);
    // console.log(myurl);
    // console.log(myurl.query);
    console.log(myurl.query.url);
    if (myurl.query.url) {
        childProcess.send(myurl.query.url);
        let allData = '';
        childProcess.on('message', (data) => {
            if (data === 'done') {
                //process.kill(1);
                reqres.res.end(allData);
            }
            else {
                allData += data;
            }
        });
    }
}

subject.subscribe(readFileFromChild);

s.on('request', (req, res) => {
    subject.next({ req: req, res: res });
});
s.listen(4000);
