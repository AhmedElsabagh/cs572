// Array.prototype.removeNum = function(num){
    
//     return this.filter(c => c != num);
// };

//---------------------------------------------------------------------------------------------------------------------------
// Array.prototype.removeNum = function(num){
//     let self = this;
//     return new Promise(function(resolve,reject){
//         resolve(self.filter(c => c != num));
//     })
// };
//---------------------------------------------------------------------------------------------------------------------------
//Not worked
// let filterData = function(dataArr, filt){
//     return new Promise(function(resolve,reject){
//         resolve(dataArr.filter(c => c != filt));
//     })
// }

// let filterArr = function(numFilter){
//     filterData(this,numFilter).then(function(result){return result;})
// }

// Array.prototype.removeNum = filterArr;
//---------------------------------------------------------------------------------------------------------------------------
let filterData = function(filt){
    let self = this;
    return new Promise(function(resolve,reject){
        resolve(self.filter(c => c != filt));
    })
}
Array.prototype.removeNum = filterData;

let filterArr = async function(){
    try{
        let x = await [4,5,2,1,7,8,3,9,5,6,4].removeNum(4);
         console.log(x);
    }
    catch{
        console.log(new Error('error'));
    }
}

//---------------------------------------------------------------------------------------------------------------------------


 
console.log('Start');
console.log([4,5,2,1,7,8,3,9,5,6,4]);
filterArr();
//[4,5,2,1,7,8,3,9,5,6,4].removeNum(4);
console.log('Finish');