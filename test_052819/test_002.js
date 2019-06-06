// const countChar = str => {
//   const result = {};

//   let string = str.toLowerCase();

//   for (let i=0; i < string.length ; i++){
//     let char = string[i];
    
//     if (/[a-z0-9]/.test(char)){
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       else {
//         result[char] = 1;
//       }
//     }
//   }

//   return result;
// }

// const countChar = str => {
//   const result = {};

//   const string = str.toLowerCase();

//   for (let char of string) {
//     if (/[a-z0-9]/.test(char)){
//       result[char] = result[char]++ || 1;
//     }
//   }

//   return result;
// }

// console.log(countChar('hello! 89'));


const countChar = str => {
  const result = {};

  for (let char of str) {
    if (isAlphaNum(char)){
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

const isAlphaNum = char => {
  let code = char.charCodeAt(0);
  if (!(code >= 49 && code <= 57) &&
      !(code >= 64 && code <= 91) &&
      !(code >= 97 && code <= 122)) {
    return false;
  }
  else {
    return true;
  }
} 

console.log(countChar('hello! 89'));

// console.log('z'.charCodeAt(0))