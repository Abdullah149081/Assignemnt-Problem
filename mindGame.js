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

const input = 50;
const result = mindGame(input);
console.log(result);
