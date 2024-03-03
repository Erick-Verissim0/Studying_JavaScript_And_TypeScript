function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  const perfectNumber = number === Math.floor(number);

  if (!perfectNumber) return -1;

  number++;

  const nextQuare = number * number;

  return nextQuare;
}

const number = 121;
console.log(findNextSquare(number));
