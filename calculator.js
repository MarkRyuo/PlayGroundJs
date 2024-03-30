// Todo Create a simple calculator 


const calculate = () => {
  const x = 10 ;
  const y = 40 ;
  
  addition(x, y) ;
  
}

calculate();

const addition = (x, y) => {

  let result = x + y ;
  return result ;

}

let add = addition(x, y) ;
console.log(add)

