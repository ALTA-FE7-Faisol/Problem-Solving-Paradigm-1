function dragonOfLoowater(dragonHead, knightHeight) {
  //  Your code here
  let result=0;
  let knightHeighttmp=knightHeight.sort()
  for (let i=0; i<dragonHead.length; i++){
    let found=false;
    for (let j = 0; j < knightHeighttmp.length; j++) {
      if (dragonHead[i]<=knightHeighttmp[j]){
        result+=knightHeighttmp[j];
        knightHeighttmp.splice(j,1);
        found=true;
        break
      }
    }
    if (found==false){
      return "knight fall"
    }
  }
  return result;
  }

  console.log(dragonOfLoowater([5, 4], [7, 8, 4]));
  console.log(dragonOfLoowater([5, 10], [5]));
  console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2]));
  console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5]));

module.exports = dragonOfLoowater;
