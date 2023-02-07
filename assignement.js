// Function Explanation:This function will take a positive number as an input and then calculate multiplying, adding, dividing, subtracting return total result.

function mindGame(positiveNumber) {
  if (typeof positiveNumber != "number" || positiveNumber < 0) {
    return "Please input Positive Number";
  }

  let multiplicationNumber = positiveNumber * 3;
  let substitutionNumber = multiplicationNumber + 10;
  let divisionNumber = substitutionNumber / 2;
  let subtractionNumber = divisionNumber - 5;
  positiveNumber = subtractionNumber;

  return positiveNumber;
}

// Function Explanation:This function will take a string word as input. Then total character  checking now if string is even number then result even, otherwise odd.

function evenOdd(findEvenOdd) {
  if (typeof findEvenOdd != "string") {
    return "Please input String";
  }

  if (findEvenOdd.length % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Function Explanation:This function checks the difference of 7 from the input parameter value.

function isLGSeven(sevenLGVerify) {
  if (typeof sevenLGVerify != "number") {
    return "Please input Number ";
  }

  let number = sevenLGVerify - 7;

  if (number < 7) {
    return number;
  } else {
    return sevenLGVerify * 2;
  }
}

// Function Explanation:This function takes an array of input parameter. Then the array will count the negative elements

function findingBadData(countBadData) {
  let valid = Array.isArray(countBadData);

  if (valid != true) {
    return "Please Input Array";
  }

  let count = 0;
  for (let i = 0; i < countBadData.length; i++) {
    let element = countBadData[i];

    if (element < 0) {
      count = count + 1;
    }
  }

  return count;
}

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

/* console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));
console.log(mindGame(-3));
console.log(mindGame(true));
console.log(mindGame("this is a string"));
console.log(evenOdd("Phero"));
console.log(evenOdd("Batch7"));
console.log(evenOdd("chatgpt"));
console.log(evenOdd("this is a string"));
console.log(evenOdd(-85));
console.log(evenOdd(123));
console.log(evenOdd(true));
console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));
console.log(isLGSeven(0));
console.log(isLGSeven(true));
console.log(isLGSeven("this is a string"));
console.log(findingBadData([1, 2, 5]));
console.log(findingBadData([2, -5, -7, -13]));
console.log(findingBadData([-4, -9, -5, -33, -55]));
console.log(findingBadData(true));
console.log(findingBadData("this is a string"));
console.log(findingBadData(555));
console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, 1));
console.log(gemsToDiamond(true));
console.log(gemsToDiamond("this is a string"));
console.log(gemsToDiamond(55));
 */
