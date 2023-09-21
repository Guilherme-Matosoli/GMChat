import { app } from "../app";
import request from "supertest";

describe("Register user controller", () => {

  it("Should be able to create a new user", async () => {
    const data = {
      name: "tester",
      email: "tester@itester.com",
      username: "testering",
      password: "tester123"
    };

    const response = request(app).post('/register').send(data);
  })

})