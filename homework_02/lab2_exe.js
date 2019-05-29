function getMax(arr){
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
    console.log(max);
}

function getMin(arr){
    var min = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    console.log(min);
}

function getValue(isPluck){
    let self = this;

    if(isPluck){
        process.nextTick(getMax,self);
    }
    else {
        //queueMicrotask(getMin,self); //gives error
        setImmediate(getMin,self);
    }
}
Array.prototype.pluck = getValue;

console.log('Start');
[4,5,2,1,7,8,3,9,5,6,4].pluck(true);
[4,5,2,1,7,8,3,9,5,6,4].pluck(false);
console.log('Finish');
