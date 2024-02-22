// Todo Create a simple Javascript 

// let x = 10 ;
// let y = 20 ;
// let z ;

// z = x + y ;

// console.log(z) ;


// for(let i = 0 ; i < 2 ; i+=1 ) { 
//   for(let j = 0 ; j < 4 ; j +=1 ) {
//     console.log(j) ;
//   }
//   // console.log(i);
// }

// example neto is first for loop ay parang row tapos ang second loop naman ay column 

// TODO 

// let random = Math.ceil(Math.random()* 50 ) ;
// let row = 10 ;
// let column = 10 ;

// for(let i = 0 ; i <= row ; i++ ) {
//   for(let j = 0 ; j <= column ; j++){
//     column += j ;
//     console.log(column) ;
//   }
//   row += i ;
//   console.log(row) ;
// }


// todo function = Define code once, and use it many times.
	  //  to perform same code, call the function name .
// let x = "YOw" ;
// let y = "hallo" ;

// function number() {

//   hello(x, y)
// }

// function test(x, y) {

//   console.log("Hello" + x ) ;
// }

// startProgram() ;


// function startProgram() {
  
//   let userName = "Bro" ;
//   let age = 21 ;

//   happyBirthday(userName, age)
// }


// function happyBirthday(userName, age) {

//   console.log("Happy Birthday to you!") ;
//   console.log("Happy Birthday to you!") ;
//   console.log("Happy Birthday to you my dear!", userName) ;
//   console.log("Happy Birthday to you!") ;
//   console.log("You are", age ,"years old!") ;


// }



// ageNumber(31) ; // Call the Function

// function ageNumber(hello) {

//   if (hello >= 30) {
//     console.log("Your Adult") ;
//   }
//   else {
//     console.log("Your to Young") ;
//   }
// }


ageNumber() ;

function ageNumber(age) {

  switch(true) {
    case age >= 18 && age < 60 :
      console.log("Your Adult Now!") ;
      break ;

    case age <= 17 && age >= 11 :
      console.log("Your Young") ;
      break ;
    
    case age <= 10 || age > 1 : 
      console.log("Your too Young")
      break ;

    case age < 0 || age <= 0 :
      console.log("Your Infant") ;
      break ;

    case age >= 60 || age <= 80 :
      console.log("Your Senior") ;
      break ;
    
    case age > 80 || age > 100 :
      console.log("Your Legend Right Now"); 
      break ;  
    
    default :
      console.log(age , " Is not a age Number") ;

  }

}

