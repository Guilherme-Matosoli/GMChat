import { Client } from "pg";
import { app } from "../app";
import { AppDataSource } from "../database/dataSource";

import request from "supertest";


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

    const client = new Client({
      host: "localhost",
      port: 5432,
      password: "12345678",
      application_name: "postgres",
      user: "postgres",
      database: "postgres"
    });
    await client.connect();
    await client.query('DELETE FROM users;');

    expect(user.body).toHaveProperty("token");
  })
})