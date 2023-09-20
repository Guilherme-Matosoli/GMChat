import { app } from "../app";
import request from "supertest";

describe("create user controller", () => {

  it("should be able to create a new user", () => {
    request(app).get('')
  })

})