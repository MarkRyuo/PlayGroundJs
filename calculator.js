// Todo Create a simple calculator 


const x = 10 ;
const y = 40 ;
  
  

const addition = (x, y) => {

  let result = x + y ;
  return result ;

}

let add = addition(x, y) ;
console.log(`addition result: ${add}`)

const subtract = (x, y) => {

  let result = x - y ;
  return result ;

}

let sub = subtract(x, y) ;
console.log(`subtract result: ${sub}`) ;

const division = (x, y) => {
  let result = Math.ceil(x / y) ;  
  return result ;
}

let _div = division(x, y) ;
console.log(`division result: ${_div}`)

const multiply = (x, y) => {
  let result = x * y ;
  return result ;
}

let _mul = multiply(x, y) ;
console.log(`multiply result: ${_mul}`)
