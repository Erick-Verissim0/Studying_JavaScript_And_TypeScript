class Bus {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(
      `Bus starting, brand: ${this.brand}, model: ${this.model}, year: ${this.year}`
    );
  }
}

const bus1 = new Bus("Vivara", "Erick", 20);
bus1.start();
