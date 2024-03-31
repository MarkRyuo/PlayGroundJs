// Todo Create a simple calculator 


const x = 10 ;
const y = 40 ;
  
  

const addition = (x, y) => {

  let result = x + y ;
  return result ;

}

let add = addition(x, y) ;
console.log(add)

const subtract = (x, y) => {

  let result = x - y ;
  result = Math.round(result)
  return result ;

}

let sub = subtract(x, y)
console.log(sub)

