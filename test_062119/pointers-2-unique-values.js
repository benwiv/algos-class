
//take array of sorted numbers, count the unique values in the array

// let test1=[-11,-9,-6,-4,-4,0,0,0,0,1,2,5,16,1777];

// const countUniqueValues = (sortedArr) => {
//   let left = 0;
//   let right= left+1;
//   let uniqueValues = {};

//   while (right < sortedArr.length) {
//     let diff = right-left;
    
//     if (diff===0) {
//       uniqueValues[sortedArr[left]] += 1;
//       right++;
//     }
//     else {
//       left=right;
//       right++;
//     }
//   }

//   return uniqueValues;
// }

// console.log(countUniqueValues(test1));




// const countUniqueValues = (sortedArr) => {
//   let left = 0;
//   let right= 1;
//   let count = 0;

//   while (right < sortedArr.length) {
//     let arr = sortedArr;

//     if (arr[left] === arr[right]) {
//       right++;
//     }   
//     else {
//       left++;
//       arr[left] = arr[right];
//       right++;
//     }
//     count = left+1;
//   }
//   return count
// }


let test2=[-11,-9,-6,-4,-4,0,1,2,2,3,5,16,111,1777];
let test1=[-11,-9,-6,-4,-4,0,0,0,0,1,2,2,3,5,16,111,1777];

const countUniqueValues2 = (arr) => {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;
}
console.log(countUniqueValues2(test1));
// console.log(countUniqueValues(test1));

console.log(countUniqueValues2(test2));
// console.log(countUniqueValues(test2));
