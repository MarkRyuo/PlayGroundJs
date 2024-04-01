// console.log("Hello Program")

// Create a function na mag sasay ng 4 times ng hello program then ito ay lalabas ng isang say anything 

// const SayHello = () => {
//   let hello = "Hello Program"
//   for(let i = 0 ; i < 4 ; i++) {
//   hello[i]
//   console.log(hello)
//     if(hello) {
//       console.log("Hey, Say Something")
//     }

//   }
// }

// SayHello()



// class Rectangle {
//   // To setup 
//   constructor() {
//     console.log("The rectangle is now created!")
//   }
// }

// let rec = new Rectangle() ;

// class Username {
//   // setup
//   constructor(name, age) {

//     this.name = name ;
//     this.age = age ;
//   }

//   // Function 
//   username() {
//     console.log(`Your name is: ${this.name}`)
//     console.log(`Your age is: ${this.age}`)
//   }
  
// }

// const person1 = new Username("Jhon Mark", 21) ;

// person1.username() ;


// Todo Class is like a Blue Print of the house 

// class House {

//   constructor (_color) {
//     this.color = _color ;
//   }
// }

// const houseObject = new House("red") ;
// console.log(`The color of the house is ${houseObject.color}`)


class Userlog {
  constructor(_name, _age, _address){
    this.name = _name ;
    this.age = _age ;
    this.address = _address ;
  }

  functionthis() {
    console.log(`Hello my name is ${this.name}`)
    console.log(`My age is ${this.age}`)
    console.log(`Our address is ${this.address}`)
  }
}

const person1 = new Userlog("Jhon Mark", 21, "Cumba, Lipa City") ;
