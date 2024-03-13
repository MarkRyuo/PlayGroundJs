// console.log("Hello world") ; 

// for i is like counter 

// talkOf() ;

// function talkOf(){
//   for(let counter = 0 ; counter < 10 ; counter+=1 ) {
//     console.log(counter) ;
//   }
// }

let a = 10 ;
let lineX = "Hello" ;

kakaotalk = talkOf(a) ;

console.log(kakaotalk) ;

function talkOf(a){
  for(let counterX = 0 ; counterX < a ; counterX+=1 ) {
    for(let counterY = 2 ; counterY < 6 ; counterY+=2){
      lineX += counterY ;
      return lineX ;
    }
    
  }

}