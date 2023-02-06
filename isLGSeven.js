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

const re = 15;
const result = isLGSeven(re);
console.log(result);
