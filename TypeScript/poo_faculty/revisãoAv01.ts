class Car {
  private model: string;
  private color: string;
  private year: number;
  private velocity: number;

  constructor(model: string, color: string, year: number, velocity: number) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.velocity = velocity;
  }

  get returnValues() {
    return {
      model: this.model,
      color: this.color,
      year: this.year,
      velocity: this.velocity,
    };
  }

  speedUp() {
    this.velocity += 10;
  }

  setVelocity(velocity: number) {
    this.velocity += velocity;
  }

  speedDown() {
    this.velocity -= 10;
  }

  set changeColor(newColor: string) {
    this.color = newColor;
  }
}

const gol = new Car("gol", "branca", 2020, 10);
gol.speedUp();
console.log(gol.returnValues);
gol.speedDown();
console.log(gol.returnValues);
gol.changeColor = "preto";
console.log(gol.returnValues);

class Carro {
  marca: string;
  cor: string;
  ano: number;

  constructor(marca: string, cor: string, ano: number) {
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
  }

  verificandoAno() {
    // se eu colocar o "get" na frente do nome, onde eu chamar a função não é preciso colocar os parênteses
    if (this.ano > 2020) return true;
    return false;
  }
}

const ford = new Carro("ford", "azul", 2022);
console.log(ford.verificandoAno());

const ferrari = new Carro("ferrari", "vermelha", 2019);
console.log(ferrari.verificandoAno());

class CarroEsportivo extends Car {
  modoEsportivo: boolean;

  constructor(
    model: string,
    color: string,
    year: number,
    velocity: number,
    modoEsportivo: boolean
  ) {
    super(model, color, year, velocity); // chama o construtor da classe pai
    this.modoEsportivo = modoEsportivo;
  }

  activateSportiveMode() {
    if (this.modoEsportivo === true) {
      return this.setVelocity(100);
    }
  }
}

const hb20 = new CarroEsportivo("hb20", "branca", 2020, 10, true);
hb20.activateSportiveMode();
console.log(hb20);
