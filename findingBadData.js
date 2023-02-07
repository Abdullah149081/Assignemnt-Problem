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
