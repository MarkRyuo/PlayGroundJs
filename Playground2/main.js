// // Todo create a hypotenuse 

// let x = 5 ;
// let y = 10 ;
// let z ;

// z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) ;
// z = Math.ceil(z) ;

// console.log(z) ;

// Todo 

/* Switch = statement that examines a value 
for a match against many case clause. 
More efficiant that many "else if " statement . */


// let grade = "e" ;
// grade = grade.toUpperCase();

// switch(grade){

//   case "A" :
//   console.log("you did great") ;
//   break ;

//   case "B" :
//     console.log("You did well") ;
//     break ;

//   case "C" :
//     console.log("You did Good") ;
//     break;
  
//   case "D" :
//     console.log("Good Enough") ;
//     break ;
  
//   case "E" :
//     console.log("Are you serious?") ;
//     break ;
  
//   default: 
//     console.log(grade + " is not a letter grade bro") ;
// }


let grade = window.prompt("What is your grade in filipino subject") ;
grade = Number(grade) ;

switch(grade) {

  case grade >= 99 :
    console.log("Awesome You did great") ;
    break ;

  case grade >= 85 :
    console.log("Awesome thats Great") ;
    break ;

  case grade >= 80 :
    console.log("Not Bad") ;
    break ;

  case grade <= 70 :
    console.log("Better luck next time") ;
    break ;
  
  default:
    window.alert(grade + " Thats not grade letter try again") ;

}