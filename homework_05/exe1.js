const express = require('express');
const app = express();
app.listen(4545);

const axios = require('axios');
const { from } = require('rxjs');
const { shareReplay } = require('rxjs/operators');

app.set('trust proxy',true);
app.enable('case sensitive routing');
app.set('strict routing',true);

app.get('/users', function(request,response){
    //console.log(request.query);
    let obj$ = from(axios.get('https://randomuser.me/api/?results=10')); 
    obj$.subscribe((e) => {
        var date = new Date();
    response.set({
        'Link' : '<https://randomuser.me/api/?page=1&results=10>; rel="first",' + 
                    '<https://randomuser.me/api/?page=1&results=10>; rel="prev",' + 
                    '<https://randomuser.me/api/?page=3&results=10>; rel="next"',
        'Cache-Control' : 'private',
        'Expires' : date.getDate() + 1
    });
    response.json(e.data.results);
    response.end();
    });

    obj$.pipe(shareReplay(1));
});


