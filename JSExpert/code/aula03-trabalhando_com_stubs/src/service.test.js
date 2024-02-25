const Service = require("./service");
const { deepStrictEqual } = require("assert");
const sinon = require("sinon");
const BASE_URL_1 = "https://swapi.dev/api/planets/1/";
const BASE_URL_2 = "https://swapi.dev/api/planets/2/";
const mocks = {
  tatooine: require("../mocks/tatooine.json"),
  alderaan: require("../mocks/allderaan.json"),
};

(async () => {
  /* {
    const service = new Service();
    const withoutStub = await service.makeRequest(BASE_URL_2);
    console.log(JSON.stringify(withoutStub));
  } */

  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name);

  stub.withArgs(BASE_URL_1).resolves(mocks.tatooine);
  stub.withArgs(BASE_URL_2).resolves(mocks.alderaan);

  {
    {
      const expected = {
        name: "Tatooine",
        surfaceWater: "1",
        appreadedIn: 5,
      };

      const result = await service.getPlanets(BASE_URL_1);
      deepStrictEqual(result, expected); // primeiro parâmetro é o resultado atual e o segundo parametro é o que ele espera receber do primeiro, com os dois em mãos ele compara e se estiverem diferentes, retorna um erro. Se não der nenhum erro, é porque passou nos testes!

      console.log("result tatooine", result);
    }

    const expected = {
      name: "Alderaan",
      surfaceWater: "40",
      appreadedIn: 2,
    };

    const result = await service.getPlanets(BASE_URL_2);
    deepStrictEqual(result, expected);

    console.log("result alderaan", result);
  }

  /* { // esse objeto está existindo para as variaveis serem criadas somente dentro desse bloco, além de ajudar na organização e visualização do código
    const response = await service.makeRequest(BASE_URL_1);
    console.log("response", response); 
  } */
})();
