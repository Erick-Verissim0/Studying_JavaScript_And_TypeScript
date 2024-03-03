function squareSum(numbers) {
  const error =
    "Os números não foram passados, ou foram passados de uma maneira inválida";

  if (!numbers) throw new Error(error);

  let arrayValues = [];
  let result = 0;

  for (i = 0; i < numbers.length; i++) {
    const squaring = 2;

    const squaringResult = (numbers[i] **= squaring);

    arrayValues.push(squaringResult);
  }

  for (i = 0; i < arrayValues.length; i++) {
    result += arrayValues[i];
  }

  return result;
}

const exampleArray = [1, 2, 2];
console.log(squareSum(exampleArray));
