// Function Explanation:This function takes 3 parameter. Then convert Gems To Diamond.

function gemsToDiamond(quantityOne, quantityTwo, quantityThird) {
  if (typeof quantityOne != "number" || quantityOne < 0 || typeof quantityTwo != "number" || quantityTwo < 0 || typeof quantityThird != "number" || quantityThird < 0) {
    return "Provide All Number Positive";
  }

  let firstFriendGems = 21;
  let secondFriendGems = 32;
  let thirdFriendGems = 43;

  let firstDiamond = firstFriendGems * quantityOne;
  let secondDiamond = secondFriendGems * quantityTwo;
  let thirdDiamond = thirdFriendGems * quantityThird;

  let totalDiamond = firstDiamond + secondDiamond + thirdDiamond;

  if (totalDiamond > 1000 * 2) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}
