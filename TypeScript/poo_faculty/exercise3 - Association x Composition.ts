class Category {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Product {
  name: string;
  value: number;
  description: string;
  category: string;

  constructor(
    name: string,
    value: number,
    description: string,
    category: string
  ) {
    this.name = name;
    this.value = value;
    this.description = description;
    this.category = category;
  }
}

const category = new Category("Celular");

const product = new Product(
  "Iphone 13 Pro Max",
  4500,
  "Um excelente celular para todo tipo de pessoas e uso!",
  category.name
);
