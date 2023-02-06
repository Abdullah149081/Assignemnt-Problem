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

const r = [-4, -9, -5, -33, -55];
const result = findingBadData(r);
console.log(result);
