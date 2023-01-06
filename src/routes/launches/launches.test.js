const request = require("supertest");
const app = require("../../app.js");

describe("Test GET /launches", () => {
  test("should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/) //lokk headers
      .expect(200);
  });
});

describe("Test POST /launch", () => {
  test("should respond with 200 success", () => {});
  test("should catch missing required properties", () => {});
  test("should catch invalid dates", () => {});
});
