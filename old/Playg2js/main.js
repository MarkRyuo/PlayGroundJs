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


// let grade = window.prompt("What is your grade in filipino subject") ;

// grade = Number(grade) ;

// switch(true) {

//   case grade >= 95 :
//     console.log("Awesome You did great") ;
//     break ;

//   case grade >= 85 :
//     console.log("Awesome thats Great") ;
//     break ;

//   case grade >= 80 && grade <= 80 :
//     console.log("Not Bad") ;
//     break ;

//   case grade <= 70 :
//     console.log("Better luck next time") ;
//     break ;
  
//   default:
//     window.alert(grade + " Thats not grade letter try again") ;

// }


let grade = 63 ;

// grade = Math.ceil(Math.random() * 100 ) ;


// switch(true) {

//   case grade >= 90 :
//     console.log(grade + " Congrats your the best") ;
//     break ;

//   case grade >= 85 :
//     console.log(grade + " Great your pass keep going") ;
//     break;

//   case grade >= 75:
//     console.log(grade + " Too low but its okay your pass")
//     break;

//   case grade <= 70 || grade <= 74 :
//     console.log(grade + " Too bad Better luck next time") ;
//     break;

//   default:
//     console.log(grade + " is not a grade number try again") ;
// }



// Todo ALL 

let nameDeveloper = "Jhon Mark" ;
let age = 20 ;
 // this is changing it depends 


let sideA = Math.ceil(Math.random() * 100) ;
let sideB = Math.ceil(Math.random() * 50) ;
let sideC ;

// todo If statement first 

if (age == 20) {
  nameDeveloper = nameDeveloper.toUpperCase().slice(4, 9) // kapag naman equal to 20 ito ay i uuppercase ang pangalan 
  console.log(nameDeveloper + " Your old enough welcome to our system")

}
else if (age <= 20) {
  nameDeveloper = nameDeveloper.toLowerCase() ; // if ang age niya ay less than or equal sa 20 illower case niya ang name neto
  console.log(nameDeveloper + " Welcome to this system")
  console.log(age + " Your to young i need to add +1 in your age "+ [age += 1] + " your age now " ) ;
}
else {
  console.log("Alert your a Robot") ;
}

switch(true) {

  case sideA >= 20 && sideB <= 20  :
    sideC = Math.ceil(Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) ;
    console.log("Side A = " + sideA + " Side B " + sideB + " = " + sideC + " is the side " + " Case 1" ) ;
    break ;

  case sideA >= 30 && sideB <= 30 :
    sideC = Math.ceil(Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) ;
    console.log("Side A = " + sideA + " Side B " + sideB + " = " + sideC + " is the side "  + " Case 2") ;
    break ; 
  
  case sideA >= 50 || sideB == 100 :
    sideC = Math.ceil(Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) ;
    console.log("Side A = " + sideA + " Side B " + sideB + " = " + sideC + " is the side "  + " Case 3") ;
    break ;

  case sideA >= 50 || sideB == 100 :
    sideC = Math.ceil(Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) ;
    console.log("Side A = " + sideA + " Side B " + sideB + " = " + sideC + " is the side "  + " Case 3") ;
    break ;
    
  case sideA >= 50 || sideB == 100 :
    sideC = Math.ceil(Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) ;
    console.log("Side A = " + sideA + " Side B " + sideB + " = " + sideC + " is the side "  + " Case 3") ;
    break ;
    
  case sideA >= 50 || sideB == 100 :
    sideC = Math.ceil(Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) ;
    console.log("Side A = " + sideA + " Side B " + sideB + " = " + sideC + " is the side "  + " Case 3") ;
    break ;

  

  

  default :
  console.log("Not Enough")
}