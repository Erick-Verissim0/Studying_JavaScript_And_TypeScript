class Fibonacci {
  *execute(input, current = 0, next = 1) {
    // console.count("current", current);

    if (input === 0) {
      return 0;
    }
    yield current; // yield é igual ao return, está retornando o valor

    // deleta a função, mas não retorna o valor
    yield* this.execute(input - 1, next, current + next);
  }
}

module.exports = Fibonacci;
