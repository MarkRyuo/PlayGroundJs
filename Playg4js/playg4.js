



// todo While Loop = repeat some code while some condition is true potentially Infinite 


// let userName = "" ;

// while(userName == "") {
//   userName = "Jhon Mark"
// }

// console.log("Hello " + userName) ;

// let userName = "" ;

//  do {
//   userName = "Jhon Mark"
// } while(userName == "")

// console.log("Hello " + userName) ;

// let x = 20 ;

// while (x >= 30 ) {
//   console.log("Huh")
// }

// Todo do while loop = do something them check the condition, repeat if condition is true

// let men;
 
// do {
//   men = false ;
//   console.log("Your stock but your gay bro") ;
// }while(!(men == true )) ;


// let x = 30 ;

// while(x < 40 ) {
//   console.log("Hello World") ;
// }

// do {
//   console.log("Hello World") ;
// }while(x > 40) ;


//let sunny = true ;

// while (sunny) {
//   console.log("Great Day") ;
// }

// do {
//  console.log("Bad Day")
// }while(!(sunny == false)) ;



// let goal = "A" ;

// do {
//   console.log("Your dream has come!") ;
// }while(goal = "A") ;

// function goalofyear(goal) {

//   do {
//     console.log("Yeah Congrats ") ;
//   }while(goal == "Front End Developer!") ;
// }

// goalofyear("Front End Developer!") ;


// todo for loop = repeat some code a certain amount of times


// for(let i = 102 ; i >=100 ; i +=1 ) {
//   console.log(i)
// }

// let i ;
// // Theres a 70 people tapos ang pagkain nalamang ay may 20 pcs we need to bawasan ang mga tao .
// for (i = 70 ; i >= 20 ; i-=5 ) {
//   console.log(i) ;
// }

// console.log("The total of people is 20") ;

// todo break = breaks out a loop entirely 
// Todo continue = skip the iteration of loop 


// for(let i = 1 ; i < 20 ; i -= 1 ) {
//   if (i == -13) {
//     break ;
//   }
//   console.log(i)
// }


// ang nilalaman ng i is 20 tapos ang condition ay kung ang i ay is greater than sa 0 ang i is babawasan ng isa 

// for (let i = 20 ; i > 0 ; i -=1 ) {
//   if (i == 13 ) {
//     continue ; // lilikdangan niya lamang ang 13 
//   }
//   console.log(i)
// }

// Todo This is while and do while loop 

// let age = 16;

// do{
//   console.log("Welcome to adult hood")
// }while(age > 17 ) ;

// while(age < 17) {
//   console.log("Your to young") ;
// }


// todo using if, else if & else statement and function with parameter  


function ageOf(age) {

  if (age > 18 || age >= 18 ) {
    console.log("Your Adult") ;
  }
  else if (age < 18 || age <= 17 ) {
    console.log("Your Young") ;
  }
  else if (age > 60 || age >= 60 ) {
    console.log("Your Senior Citizen") ;
  }
  else {
    console.log(age + " Is not a Number") ;
  }

}


// ageOf(18) ; // Adult 
// ageOf(15) ; // Young 
// ageOf(60) ; // Senior 

ageOf(Math.ceil(Math.random() * 100)) ;