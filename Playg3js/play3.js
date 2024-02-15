



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

// let celsius = 69 ;
// // Celsius ay kapag bumaba ay cloudly kapag mataas naman ay sunny 
// let fahrenheit = 24 ;
// // Fahrenheit ay kapag mataas ay cloudly kapag mababa naman ay sunny

// switch(true) {
  
//   case (celsius <= 30 && fahrenheit >= 60) :
//     console.log("Mostly Cloudly Outside") ;
//     break ;

//   case (celsius >= 31 && fahrenheit <= 59) :
//     console.log("Mostly Sunny Outside") ;
//     break ;
  
//   default :
//   console.log(celsius + " and " + fahrenheit + " Is not a number") ;
// }


// if (!(celsius >= 30 && fahrenheit <= 60)) {
//   console.log("Mostly Cloudly") ;
// } // if not greater than or equal to 30 ang celsius 
// else {
//   console.log("Mostly Sunny") ;
// }

// let temp ;

// if (temp == 0 ) {
  
// }

// // Define a function called greet with a parameter named name
// function greet() {
//   // Inside the function, concatenate the provided name with a greeting message
//   console.log("Hello, " + name + "!");
// }

// // Call the greet function with the argument "Alice"
// greet("Jhon Mark"); // This will print "Hello, Alice!" to the console

// lastName("Ryuo")

// function lastName(name) {
//   console.log("Hi " + name) ;
// }


tempdetermined(-5) ; // Its freezing Outside 
tempdetermined(5) ; // Its Chilly 
tempdetermined(16) ; // Its Cool 
tempdetermined(26) ; // Its Warm 
tempdetermined(30) ; // Its Hot 

function tempdetermined(temperature) {

  if (temperature <= 0 ) {
    console.log("Its freezing Outside") ;
  }
  else if (temperature >= 0 && temperature <= 10 ) {
    console.log("Its Chilly")
  }
  else if (temperature >= 11 && temperature <= 20) {
    console.log("Its Cool") ;
  }
  else if (temperature >= 21 && temperature < 30 ) {
    console.log("Its Warm") ;
  }
  else {
    console.log("Its Hot")
  }
}
