var sexEnum;
(function (sexEnum) {
    sexEnum[sexEnum["male"] = 0] = "male";
    sexEnum[sexEnum["female"] = 1] = "female";
})(sexEnum || (sexEnum = {}));
var Client = /** @class */ (function () {
    function Client(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    return Client;
}());
var Colaborator = /** @class */ (function () {
    function Colaborator(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    return Colaborator;
}());
var clientOne = new Client("Erick", 20, sexEnum.male);
console.log(clientOne);
