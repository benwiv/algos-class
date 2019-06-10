// let array1 = [1,2,3,4];
// let array2 = [1,4,9,16];

// const same = (arr1,arr2) => {
//   let result = 'true'

//   for (let i=0; i<arr1.length ; i++) {
//     let num1 = arr1[i];
//     if ((num1*num1 !== arr2[i])) {
//       result = 'false';
//     }
//   }

//   return result;
// }

// // console.log(same(array1,array2));

// let array1 = [1,2,3,4];
// let array2 = [1,4,16,9];

// const same = (arr1,arr2) => {
//   let result = 'true'
//   let freq = {};

//   for (let i=0; i<arr1.length ; i++) {
//     let num1 = arr1[i];
//     let numSquared = num1*num1;
//     //check if num1^2 is in arr2
//     if (!arr2.find(numSquared)){
//       result = 'false';
//     }
//     else if ((num1*num1 !== arr2[i])) {
//       result = 'false';
//     }
//   }

//   return result;
// }

// console.log(same(array1,array2));

let array1 = [1,2,3,4];
let array2 = [1,4,16,9];

const same = (arr1,arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arr1Freq = {};
  let arr2Freq = {};

  for (let val of arr1) {
    arr1Freq[val] = ++arr1Freq[val] || 1;
  }

  for (let val of arr2) {
    arr2Freq[val] = ++arr2Freq[val] || 1;
  }

  for (let key in arr1Freq) {
    if (!(key ** 2 in arr2Freq)) {
      return false;
    }
    if(arr1Freq[key] !== arr2Freq[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same(array1,array2));