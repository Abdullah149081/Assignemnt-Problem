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
