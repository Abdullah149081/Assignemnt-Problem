function evenOdd(findEvenOdd) {
  if (typeof findEvenOdd != "string") {
    return "Please type Character";
  }

  if (findEvenOdd.length % 2 != 0) {
    return "odd";
  } else {
    return "even";
  }
}

const odd = "jack ma8";
const result = evenOdd(odd);
console.log(result);


