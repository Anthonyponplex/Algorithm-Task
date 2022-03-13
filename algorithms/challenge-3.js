function binaryReversal(value) {
     let result = [0,0,0,0,0,0,0,0];
     let index =0;
     while (input >0){
         if(index >result.length -1){
         result.push(0,0,0,0,0,0,0,0);
        }
         result[index] = input % 2;
         input =(input - result [index]) / 2;
         index++
     }
     let reversed = 0;
     let letOfResult = result.length - 1;
    for (let i=0; i<=letOfResult; i++){
         reversed+=
         result[i]*Math.pow(2, (letOfResult- i));
     }
     return reversed;
    

console.log(binaryReversal("47"));
console.log(binaryReversal (4567));
module.exports = binaryReversal
