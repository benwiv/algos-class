
//    check if same length
//    init 2 objects for letter
//    loop through one string, store each letter + index
//    1234
//    4321
//    for (Math.ceiling(str.length/2))
//    check if !(str1[i] (0) === str[(str1.length-i)])

// let string1 = '!redrum';
// let string2 = 'murder!';

// const anagramCheck = (str1,str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
  
//   let str1Len = str1.length;
//   // console.log(`string length is: ${str1Len}`);

//   for (let i=0; i < str1Len; i++) {
//     // console.log(`letters are: ${str1[i]} and ${str2[(str1Len-1)-i]}`)
//     if (str1[i] !== str2[(str1Len-1)-i]) {
//       return false
//     }
//   }
//   return true;
// }

// console.log(anagramCheck(string1,string2));

let string1test = 'redrum';
let string2test = 'murder';

const validAnagram = (str1,str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  
  let str1Freq = {};
  let str2Freq = {}

  for (let char of str1) {
    str1Freq[char] = ++str1Freq[char] || 1;
  }
  for (let char of str2) {
    str2Freq[char] = ++str2Freq[char] || 1;
  }

  for (let key in str1Freq) {
    if (str1Freq[key] !== str2Freq[key]) {
      return false
    }
  }
  return true;
}

console.log(validAnagram(string1test,string2test));