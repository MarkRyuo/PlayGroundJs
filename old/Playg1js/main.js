


// let fname = window.prompt("What is your name? ") ;

// fname = String(fname) ;

// window.alert("Hello " + fname + " Welcome to my World!" + " But!") ;

// let lname = window.prompt("Can you tell me what is your Lastname ?")

// lname = String(lname) ;

// window.alert("Thank you for your Participation " + fname + " " +  lname + " Welcome!" )

// Todo Lets create a simple Math 

// let x ;
// let y ;
// let z ;

// x = 45 // I have 45 eggs but we need to buy again we need 50 eggs 
// x = Number(x) ;

// y = 50
// y = Number(y) ; 


// z = x + y ;
// // z = x - y ;
// // z = x * y ;
// // z = x / y ;  // 0.9 total here

// // z = Math.round(z) ;
// // z = Math.floor(z) ; //  Round Down but pag negative lumabas iraraund up niya ito 
// // z = Math.ceil(z) ; 


// console.log(z + " total of Eggs") ;


// Todo Minumun and maximum 

// Todo This game called Give a number 


// let x ;
// let y ;
// let z ;
// let minimum ;
// let maximum ;


// x = window.prompt("Player 1 add a Number ") ;
// x = Number(x) ;
// window.alert("Player 1 Choose Number " + x) ;
// console.log(x) ;

// y = window.prompt("Player 2 add a Number " ) ;
// y = Number(y) ;
// window.alert("player 2 Choose Number " + y) ;
// console.log(y) ;

// z = window.prompt("Player 3  add a Number ") ;
// z = Number(z) ;
// window.alert("Player 3 Choose Number " + z) ;
// console.log(z) ;


// minimum = Math.min(x, y, z) ;
// minimum = Number(minimum) ;


// console.log("minimum is " + minimum) ;


// Todo Dice game?


// let x ;
// let y ;
// let z ; 

// x = Math.random() * 6 + 1 ;
// x = Math.floor(x) ;

// y = Math.random() * 6 + 1 ;
// y = Math.floor(y) ;

// z = Math.random() * 6 + 1 ;
// z = Math.floor(y) ;

// console.log(x) ;
// console.log(y) ;
// console.log(z) ;


// let x ;
// let y ;
// let z ;

// // Ang random ay nagbibigay ng numbers na decimal 


// x = Math.ceil(Math.random() * 6 ) ; // kaya *6 kasi ang lalabas jan ay less that or equal ng 6 kaya ceil ginamit ko para hindi kona lagyan ng off set na 1 
// x = Number(x) ; 

// y = Math.ceil(Math.random() * 6 ) ;
// y = Number(y) ; 

// z = Math.ceil(Math.random() * 6 ) ;
// z = Number(z) ; 

// console.log(x, y, z) ;


// Todo solve  Hypotenuse 

// c pow 2 square root a pow 2 + b pow 2 

// c = [a + b]


// let sideA ;
// let sideB ;

// let sideC ;

// sideA = window.prompt("Enter side A ") ;
// sideA = Number(sideA) ;

// sideB = window.prompt("Enter side B ")
// sideB = Number(sideB) ;

// sideC = Math.floor(Math.sqrt(sideA + sideB)) ;

// console.log(sideC) ;


// Todo This the the correct hypotenuse solving 
// sa mga nasa taas ay mali may kulang nakalimutan ko lagyan ng power


// let sideA = Math.floor(Math.random() * 100 ) ;
// console.log(sideA) ;

// let sideB = Math.floor(Math.random() * 100 ) ;
// console.log(sideB) ;

// let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)) ;

// console.log(sideC) ;


// Todo automatic number and power number

// let x ;
// let y ;

//  x = Math.pow(Math.random() * 10, Math.random() * 6) ;
//  x = Math.ceil(x) ;

//  console.log(x); 


// let x = window.prompt("Enter a Number") ;

// x = Number(x) ;
// x += 1 ;

// console.log(x) ;

// Todo Create a form 

// let fname = window.prompt("Enter your Firstname ") ;
// let lname = window.prompt("Enter your Lastname ") ;

// let age ;

// age = window.prompt("Enter your age ") ;
// age = Number(age) ; // Type Conversion 
// age += 1 ; // Incrementing 
 

// console.log(fname) ;
// console.log(lname) ;
// console.log(age) ;


// Todo Method chainging 

// let userName = "Mark" ;

// let letter = userName.charAt(0).toUpperCase().trim() ;

// console.log(letter) ;


// Todo create a form 

// let x = 100 ; 
// let y = 30 ;

// let z = 40 ; 
 
// let total = x + y + z ;

// if(total >= 100) {
//   console.log(total + " is greater than or equal to 100 ") ;
// }
// else if(total <= 10 ) {
//   console.log(total + " is less than or equal to 10 ")
// }
// else{
//   console.log(total + " I dont know")
// }


// let sideA = window.prompt("Enter a number for side A") ;
// sideA = Number(sideA) ;

// let sideB = window.prompt("Enter a number for side B") ;
// sideB = Number(sideB) ;

// let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) ) ;
// sideC = Math.ceil(sideC) ;

// if(sideC <= 20) {
//   window.alert( sideC +" Great your side c is less than or equal to 20 ")
// }
// else if (sideC >=100) {
//   window.alert(sideC +" Bro thats to high side ") ;
// }
// else {
//   window.alert(sideC + " Bro your side C is too small ")
// }


// let userName = "Jhon Mark" ; 
// let firstName ;
// let lastName ;

// firstName = userName.slice(0, 4) ;
// lastName = userName.slice(5) ;

// console.log(lastName) ;
// console.log(firstName) ;

// let password = "Jhon mark " ;
// console.log(password) ;

  

// let userName = "Jhon Mark" ;
// let firstName ;
// let lastName ;

// firstName = userName.slice(0, 4) ;

// console.log(firstName) ;

// let userName = window.prompt("Enter your username ") ;
// console.log(userName) ;

// let firstName ;

// if (userName >= 10) {
//   userName = userName.replaceAll(" ", "-") ;
//   firstName = userName.slice(0, 5) ;
//   console.log(firstName) ;
// }
// else {
//   console.log(userName) ;
// }

// Todo 

const myObj = {firstName: "jhonmark", lastName: "malupa" } ;

console.log(firstName) ;

