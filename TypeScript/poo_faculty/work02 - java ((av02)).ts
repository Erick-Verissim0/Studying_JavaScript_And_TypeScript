enum sexEnum {
  "male",
  "female",
}

class Client {
  name: string;
  age: number;
  sex: sexEnum;

  constructor(name: string, age: number, sex: sexEnum) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

class Colaborator {
  name: string;
  age: number;
  sex: sexEnum;

  constructor(name: string, age: number, sex: sexEnum) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

const clientOne = new Client("Erick", 20, sexEnum.male);
const clientTwo = new Client("Priscila", 18, sexEnum.female);

const colaboratorOne = new Colaborator("Ana", 20, sexEnum.female);
const colaboratorTwo = new Colaborator("Carla", 19, sexEnum.female);
