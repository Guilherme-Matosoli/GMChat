import { app } from "../../app";
import { AppDataSource } from "../../database/dataSource";

import request from "supertest";
import { cleanDatabase } from "../../utils/cleanDatabase";


beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Login User Controller", () => {
  it("Should be able to log user", async () => {
    const data = {
      name: "tester",
      email: "tester@itester.com",
      username: "testering",
      password: "tester123"
    };

    await request(app).post('/register').send(data);

    const user = await request(app).post('/login').send({ email: data.email, password: data.password });

    await cleanDatabase();

    expect(user.body).toHaveProperty("token");
  })
})