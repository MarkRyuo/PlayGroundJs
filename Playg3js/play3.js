



// let temp = "pizza" ;
// let sunny = true ;

// if (temp >= 15 ) {
//   console.log("Its hot outside") ;
// }
// else if (temp >= 5 ) {
//   console.log("Its cold outside")
// }
// else {
//   console.log(temp + " is not a number") ;
// }

// let temp = 15 ;
// let sunny = true ;

// if (temp >= 15 && sunny == true ) {
//   console.log("Its hot outside") ;
// }
// else if (temp >= 5 || temp >= 0 && sunny == false ) {
//   console.log("Its cold outside")
// }
// else {
//   console.log(temp + " is not a number") ;
// }

// Todo 

/* ! NOT logical operator 
typically used to reverse a condition's boolean value 
true --> false   false --> true */ 

// temp = 16 ;

// if (!(temp > 15 )) {
//   console.log("Its cloudy outside") ;
// }
// else {
//   console.log("Its sunny outside") ;
// }


// sunny = false ; // boolean

// if (!sunny) {
//   console.log("Its cloudy outside") ;
// }
// else {
//   console.log("Its sunny outside") ;
// }


// let celsius = 20 ;

// if (celsius >= 28) {
//   console.log("Mostly cloudly") ;
// }
// else {
//   console.log("Mostly sunny") ;
// }

// let fahrenheit = 45 ;

// if (fahrenheit >= 40) {
//   console.log("mostly Sunny") ;
// }
// else {
//   console.log("mostly Cloudly") ;
// }


// let celsius = 20 ;

// if (!(celsius >= 40)) {
//   console.log("Mostly cloudly") ;
// }
// // If ang celsius is not greater equal to 40 Output is Mostly Cloudly

// else {
//   console.log("Mostly sunny")
// }

let celsius = 20 ;
// Celsius ay kapag bumaba ay cloudly kapag mataas naman ay sunny 
let fahrenheit = 56 ;
// Fahrenheit ay kapag mataas ay cloudly kapag mababa naman ay sunny

switch(true) {
  
  case (celsius >= 30 && fahrenheit >= 50) :
    console.log("Mostly Cloudly Outside") ;
    break ;

  case (!(celsius >= 30 && fahrenheit >= 50)) :
    console.log("Mostly Sunny Outside") ;
    break ;
  
  default :
  console.log(celsius + " and " + fahrenheit + " Is not a number") ;
}





