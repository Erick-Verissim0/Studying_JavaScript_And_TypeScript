class Bus {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const bus1 = new Bus("Chanel", "Erick", 20);

console.log(bus1);
