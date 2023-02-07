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
