let test1 = [-300,-123,-11,-2,-1,0,1,3,4,5,6,11,12,15,18,24,244]
let test2 = [-2,-1,1,4]

//takes in array that is already sorted, finds first pair with sum=0
//create two pointers

const sumPairZero = (sortedArr) => {
    let len = sortedArr.length;
    let val1 = 0; 
    let val2 = len-1; // 2

    while (val1 < val2){
      let sum = sortedArr[val1]+sortedArr[val2];

      if (sum < 0) {
        val1++;
      }
      else if (sum > 0){
        val2--;
      }
      else {
        return [sortedArr[val1],sortedArr[val2]];
      }
    }
    return undefined;
  } 

console.log(sumPairZero(test1));
console.log(sumPairZero(test2));