/*function max(x,y){
    if(x > y){
        return x;

    }else{
        return y;
    }

    //return x > y ? x : y;
}*/

//const max2 = (x,y) =>{
//   return x > y ? x : y;
//};
/*const max2 = (x,y) => x > y ? x : y; 
 
console.log(max2(100,20));


const ePaisagem = (largura,altura) =>largura > altura;

console.log(ePaisagem(1920,1000));
*/
function recebeNum(num) {
  if (typeof num !== "number") return num;
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";

  if (num % 5 === 0) return "Buzz";

  return num;
}
for (let i = 0; i <= 100; i++) {
  console.log(i, recebeNum(i));
}
