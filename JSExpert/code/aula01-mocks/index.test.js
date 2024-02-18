const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvJson(filePath);

    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvJson(filePath);
    const expected = [
      {
        name: "Erick",
        id: 1,
        profession: "Desenvolvedor",
        birthDay: 2006,
      },
      {
        name: "Carla",
        id: 2,
        profession: "Faxineira",
        birthDay: 1989,
      },
      {
        name: "Jorge",
        id: 3,
        profession: "Pedreiro",
        birthDay: 1982,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
