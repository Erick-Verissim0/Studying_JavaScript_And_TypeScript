class MyPrivateClass {
  public privateAttribute: number;

  constructor(valor: number) {
    this.privateAttribute = valor;
  }

  getPrivateValue(): number {
    return this.privateAttribute;
  }

  // Método para definir um novo valor para o atributo privado
  setPrivateValue(newValue: number): void {
    this.privateAttribute = newValue;
  }
}

const instancia = new MyPrivateClass(10);

console.log(instancia.privateAttribute); // se a classe tiver um atributo privado, essa é a maneira para ver o atributo de fora da classe
