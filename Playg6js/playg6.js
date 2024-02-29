// Todo Function 

// naming() ;

// function naming() {

//   let userName = "Jhon Mark" ;
//   console.log("HELLO AND WELCOME! ", userName) ;

//   let time = 10 ;
  
//   Timebot(time, userName) ;

// }


// function Timebot(time, userName) {

//   // while(time >= 20) {
//   //   console.log("Times Up")
//   // }

  
//   do{
    
//     userName += time 
//     console.log(userName) ;


//   }while(time <= 20) ;

// }


// Todo return = return a value back to the place 
// where you invoked a function 

// let area ;
// let width ;
// let height ;

// width = 10 ;
// height = 69 ;

// area = getArea(width, height) ; // Function 

// console.log("The area is " , area) ; // This is outside 

// function getArea(width, height) {
  
//   let result = width * height ;
//   return result ;

//   // Return the result hindi na console log 

// }


// let x = 10 ;
// let y = 40 ;

// let z = calculate(x, y) ;

// console.log("The answer is : ", z )

// function calculate(x,y){

//   let result = x + y ;
//   return result ;
// }

// subtration(x,y,z) ;

// function subtration(x,y,z) {

//   z = y - x ;

//   if(z >= 20) {
//     console.log("Ohayo!") ;
//   }
//   else{
//     console.log(z ," Good!");
//   }

// } ;



// userName = "MarkRyuo" ; // Input your nickname :
// age = 21 ; // Input your age :


// ageX = ageOfpeople(age) ;

// console.log("Your age is ", ageX) ;
// function ageOfpeople(age) {

//   if(age >= 18 && age <= 30) {
//     console.log("Your an Adult you can Enter") ;
//   } 
//   else if(age <= 0 && age <= 17 ){
//     console.log("Your too young to Enter") ;
//   }
//   else{
//     console.log("Your an adult")
//   }
//   return age ;
// }



// age = 10 ;

// console.log("Your age is ") ;

// if(age <= 17 ) {
//   console.log("Your young") ;
// }
// else {
//   console.log("Your too old") ;
// }
// return age ;



// Todo Return statement 

// let age = 40 ;

// let ages = ageOf(age) ; // Call the function

// console.log("Im ", age , " years old but Im come to future 10 years to meet my self and my Future me is ", ages, " years old") ; 

// function ageOf(age) { 
//   let x = 10 // I declare a Variable here to add  
//   let result = x + age ;
//   return result ;
// }


// Todo ternary operator = shortcut for an "if/else statement" 
// takes 3 operands 

// 1. a condition with ?
// 2. expression if True :
// 3. expression if false 

// condition ? exprIftrue : exprIffalse 


// let adult = false ;

// ageOf(adult) ;

// function ageOf(adult) {

//   return adult ? console.log("Your an adult") : console.log("Your Young") ;
// }



// weatherOf(false) ;

// function weatherOf(sunny) {
//   sunny == true ? console.log("Its Sunny") : console.log("Its cloudy") ;
// } ;




// Todo 


//   let sunny = true ;
//   let w = weather(sunny);

//   console.log("Omg! ", w , " in here!" ) ;


// function weather(sunny) {
//   return sunny ? "Its Hot" : "Its cold!" ;
// }



// Todo use ternary 

// let x =  20 ;
// let y = 2 ;
// let z = x + y ;

// let total = totalOf(z) ;

// console.log("Hey ", total)

// function totalOf(z) {

//   return z >= 30 ? "Your the best" : "Nah why?" ;

// }


// let quit = false ;

// quitOf(quit) ;

// function quitOf(quit) {

//   !quit ? console.log("Just Rest") : console.log("Don't Quit, Just Rest") ;

// }

// let sunny = true ;

// weather(sunny) ;

// function weather(sunny) {

//     !sunny ? console.log("Its sunny outside") : console.log("Its cloudy outside") ;
// }

//Todo while loop 

// let sunny = true ;

// weatherOf(sunny) ; 

// function weatherOf(sunny) {

//   // while loop first 

//   while(sunny) {
//     console.log("It's sunny outside") ;
//   }
//   // do while loop
//   do {
//     console.log("It's cloudly outside") ;
//   }while(sunny == false)

// } ;

// Todo Template literals = delimited with (`) instead of double or single quotes allows embedded variables and expression . 

// let userName = "Mark Ryuo" ;
// let age = 21 ;
// let address = "Kyoto Japan" ;

// console.log(`Hello! ${userName}, I think your age is ${age} and your location right now  is ${address}.`) ;


let peoples = ["Start", "Jhon Mark", "Leomar", "Martha"] ;

peopleOf(peoples) ;

function peopleOf(peoples){

  let countOf = Math.ceil(Math.random() * 3 + 1) ;

  if(countOf == 1){
    console.log(`{peopleOf[1]},  Your the Leader!"`) ;
  }
  else if (countOf == 2) {
    console.log(`${peopleOf[2]}, Your the Leader!`) ;
  }
  else if (countOf == 3 ) {
    console.log(`${countOf[3]}, Your the Leader!`) ;
  }
  else {
    console.log(`${0} Start Again!!!!`) ;
  }
}