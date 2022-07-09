function simpleEquations(a, b, c) {
  // Your code here
  let result=""
  let x=1;
  let y=0;
  let z=0;
  for (let i=b-1; i>=1; i--){
    if (b%i==0){
      y=i
      z=b/i
    }
    if ((x+y+z)==a && ((x*x)+(y*y)+(z*z)==c)){
        result=x+" "+y+" "+z
    }
  }
  if (result==""){
    return "no solution"
  }
  return result;
}
console.log(simpleEquations(1, 2, 3));  // no solution
console.log(simpleEquations(6, 6, 14));  // 1 2 3

simpleEquations(1, 2, 3)  // no solution
simpleEquations(6, 6, 14) // 1 2 3

module.exports = simpleEquations;
