// Todo X for Row,  Y for column 

// Function 

// const ageOf = function () {
//   let age = 21 ;
//   return age ;
//   // age >= 30 ? console.log("Your Old Enough") : console.log("Your Young") ;
// }

// let age = ageOf() ;

// let nameL = "Jhon Mark" ;
// nameOf(nameL, age) ;

// function nameOf(nameL, age){
//   console.log(`Hello ${nameL}, your age is ${age} right? `) ;
// }



// const userName = function() {
//   let user = "Jhon Mark" ;
//   return user ;
// }

// let userAs = userName() ; 

//     // Arguments 
// age(userAs, 21) ; // call the function 
//           // Parameter 
// function age(userName, age) {
//   console.log(`Hello ${userName}, and your age is ${age}`)
// } 

// age("Nicole", 21) ; 


// Todo arrow function 

      // parameter // function
// const UserName = () => {
//   let name = "Jhon Mark" ;
//   return name ;
// }

// let user = UserName() ;


// const ageOf = (user, age ) => {
//   console.log(`Hello user ${user}, are you ${age} years old?`)
// }

// ageOf(user, 19) ;
// ageOf("Nicole",19) ;



// const USERNAME = () => {
//   let user = "Jhon Mark" ;
//   return user ;
// }

// let user_Name = USERNAME() ;

// const PASSWORD = (user_Name) => {
//    // Enter password 
//    let password = "JhonasMark" ;
//    console.log(`Hello User ${user_Name}, your password is ${password}`) ;
// }

// PASSWORD(user_Name) ;

//  Object  Literal 

const person = {
      name : "Jhon Mark" , // String literal
      age : 21, // Number literal 
      online : true // Boolean literal 
} ;

const person2 = {
      name: "Nicole",
      password: "Nicoleasnicole",
      age : 17 ,
}

// Log In function  

const user_Person = (person) => {
   let login = person.name 
   let online = person.online 

   console.log(`Hey you log in ${login} and now you online: ${online}`) ;
}

user_Person(person) ;