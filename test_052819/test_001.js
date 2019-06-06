const sumNum = (num) => {
  let total = 0;
  for (let i = 1; i <= num ; i++) {
    total += i;
  }
  return total;
}

console.log(sumNum(64));

const sumCool = (num) => {
  return num * (num + 1) / 2;
}

console.log(sumCool(64));

const testArr = [1,3,6];

const double = (arr) => {
  let newArr= [];
  for (let i=0; i<arr.length; i++){
    newArr.push(2*arr[i]);
  }
  return newArr;
}

console.log(double(testArr));
