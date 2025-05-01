// USER PROMPT 
let userInp= +prompt("Enter Your Passwor Length");
// ALL ARRAYS
let num=  [1, 2, 3, 4, 5, 6, 7, 8, 9]
let symbol=["$","&","#","_","@","*","-"]
let upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// COMBINE THEM IN ONE VARIABLE
let allCharact = [];
allCharact.push(...lowerCase, ...symbol, ...upperCase, ...num);

// GENERATOR CONDITIONS 
let password = "";
let randomIndex = "";
if (userInp >= 1) {
    for (let i = 0; i < userInp; i++) {
        let randomIndex = Math.floor(Math.random() * allCharact.length);
        password += allCharact[randomIndex];
    }}
    

// DOCUMENT.WRITE
document.write(`<h1>Password Generator</h1> `);

// IF ELSE CONDITIONS
if (userInp<5) {
    document.write("<h2 style='color:red'>The length of password is too short</h2>")
    document.write("<h2 style='color:red'>Weak Password</h2>" )
    document.write("<h1 style='color:red'>"+password+"</h1>")
    
}else if (userInp<=10) {
    document.write("<h2 style='color:blue'>Strong Password</h2>")
    document.write("<h1 style='color:blue'>"+password+"</h1>")

}else if (userInp>10) {
    document.write("<h2 style='color:Green'>Veryy Strong Password</h2>")
    document.write("<h1 style='color:green'>"+password+"</h1>")
}


    


