function evenOrOdd(number) {
  if (Number.isInteger(number / 2)) return "Even";

  return "Odd";
}

console.log(evenOrOdd(21));

// nesse caso eu estou dividindo e pegando se é um numero inteiro(10), se for, retorna Even, se não for um numero inteiro(10.5) ele retorna Odd

// Poderia ter utilizado o operador "%" e verificar se number % === 0, ele está pegando o resto da divisão de number
