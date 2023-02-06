function gemsToDiamond(numberOne, numberTwo, numberThree) {
  if (typeof numberOne != "number" || typeof numberTwo != "number" || typeof numberThree != "number") {
    return "Provide All Number";
  }

  let firstFriend = 21;
  let secondFriend = 32;
  let thirdFriend = 43;

  let firstDiamond = firstFriend * numberOne;
  let secondDiamond = secondFriend * numberTwo;
  let thirdDiamond = thirdFriend * numberThree;

  let totalDiamond = firstDiamond + secondDiamond + thirdDiamond;

  if (totalDiamond >= 2000) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}

const r = gemsToDiamond(20, 50, 50);
console.log(r);
