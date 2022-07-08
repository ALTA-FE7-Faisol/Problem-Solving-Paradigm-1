function moneyChange(money) {
  // Your code here
  let moneyAvl = [1,10,20,50,100,200,500,1000,2000,5000,10000]
  moneyAvl.sort((a,b)=>{return b-a})
  
  let moneyIterate = 0;
  let result = [];
  while (money > 0) {
      if (money < moneyAvl[moneyIterate]){
          moneyIterate++
      } else {
          money -= moneyAvl[moneyIterate]
          result.push(moneyAvl[moneyIterate])
      }
  }
  return result
}
// console.log(moneyChange(123));

module.exports = moneyChange;
