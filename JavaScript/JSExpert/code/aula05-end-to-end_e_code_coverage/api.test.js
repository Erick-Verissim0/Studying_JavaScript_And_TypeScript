const { appendFile } = require("fs");
const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");

describe("API Suite test", () => {
  describe("/contact", () => {
    it("should request the contact page and return HTTP Status 200", async () => {
      const response = await request(app).get("/contact").expect(200);

      assert.deepStrictEqual(response.text, "contact us page");
    });
  });

  describe("/hello", () => {
    it("Should request an inexistent route /hi and redirect to / hello", async () => {
      const response = await request(app).get("/hi").expect(200);

      assert.deepStrictEqual(response.text, "Hello World!");
    });
  });

  describe("/login", () => {
    it("Should request successfully on the login and return HTTP status 200", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "Erick", password: "12345" })
        .expect(200);

      assert.deepStrictEqual(response.text, "Logging as succeeded!");
    });

    it("Should unauthorized a request when requesting it using wrong credentials and return HTTP Status 401", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "root", password: "root" })
        .expect(401);

      assert.ok(response.unauthorized);
      assert.deepStrictEqual(response.text, "Loggin failed!");
    });
  });
});
