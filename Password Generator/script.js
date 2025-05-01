// ALL ARRAYS
let num=  [1, 2, 3, 4, 5, 6, 7, 8, 9]
let symbol=["$","&","#","_","@","*","-"]
let upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// COMBINE THEM IN ONE VARIABLE
let allArr =[]
allArr.push(...lowerCase, ...symbol, ...upperCase, ...num)
console.log(allArr);

