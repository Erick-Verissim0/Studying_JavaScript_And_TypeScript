var number = function (array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
};

number([]);
number(["a", "b", "c"]);
