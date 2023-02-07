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


