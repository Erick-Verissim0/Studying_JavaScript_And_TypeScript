const { readFile } = require("fs/promises");
const { join } = require("path");
const { error } = require("./constants");
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};

class File {
  static async csvJson(filePath) {
    const content = await File.getFileContent(filePath);

    const validation = File.isValid(content);

    console.log("validation", validation.valid);

    if (!validation.valid) throw new Error(validation.error);

    return content;
  }

  static async getFileContent(filePath) {
    const filename = join(__dirname, filePath);

    return (await readFile(filename)).toString("utf8");
  }

  static isValid(csvString, options = DEFAULT_OPTION) {
    const [header, ...fileWithoutHeader] = csvString.split("\n"); // nessa parte "[header, ...fileWithoutHeader]" ele está pegando por linha, então eu digo que a primeira linha é o header, e todo o resto é o corpo

    const isHeaderValid = header === options.fields.join(",");

    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }
  }
}

(async () => {
  // const result = await File.csvJson("./../mocks/threeItems-valid.csv");
  // const result = await File.csvJson("./../mocks/fourItems-invalid.csv");
  const result = await File.csvJson("./../mocks/invalid-header.csv");

  // console.log("result", result);
})();

// parei em 11 minutos
