const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let result = '';
  for (let i = 0; i < str.length; i++){
    let temp = str[i].charCodeAt()
    result += addZeros(temp.toString(2), 8)
  }
  return result
};

// function addZeros (num){
//   while (num.length < 8) {
//     num = "0" + num
//   }
//   return num
// }

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001