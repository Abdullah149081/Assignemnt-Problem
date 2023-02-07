function gemsToDiamond(numberOne, numberTwo, numberThree) {
  if (typeof numberOne != "number" || numberOne < 0 || typeof numberTwo != "number" || numberTwo < 0 || typeof numberThree != "number" || numberThree < 0) {
    return "Provide All Number Positive";
  }

  let firstFriend = 21;
  let secondFriend = 32;
  let thirdFriend = 43;

  let firstDiamond = firstFriend * numberOne;
  let secondDiamond = secondFriend * numberTwo;
  let thirdDiamond = thirdFriend * numberThree;

  let totalDiamond = firstDiamond + secondDiamond + thirdDiamond;

  if (totalDiamond > 2000) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}

const r = gemsToDiamond(1, 51, 1);
console.log(r);
