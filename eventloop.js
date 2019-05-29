// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

(() => new Promise((resolve) => resolve('promise')))().then((p) => console.log(p))
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => {
    console.log('immediate');
    console.log('immediate2');
});
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));


// function asyncReal(data,callback){
//     process.nextTick(callback,data);
// }

// asyncReal('foo', (r) => console.log(r));
// console.log('Done');

