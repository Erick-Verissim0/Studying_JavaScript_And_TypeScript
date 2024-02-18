const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  /* {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvJson(filePath);

    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvJson(filePath);
    await rejects(result, rejection);
  } */
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvJson(filePath);
    const expected = [
      {
        id: 1,
        name: "Erick",
        profession: "Desenvolvedor",
        age: 18,
      },
      {
        id: 2,
        name: "Carla",
        profession: "Faxineira",
        age: 35,
      },
      {
        id: 3,
        name: "Jorge",
        profession: "Pedreiro",
        age: 42,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
