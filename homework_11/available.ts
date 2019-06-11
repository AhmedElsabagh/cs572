export function addAvailability (isAval : boolean){
     return function(targetClass : any){
        return class{
             available = isAval;
        }
    }
}