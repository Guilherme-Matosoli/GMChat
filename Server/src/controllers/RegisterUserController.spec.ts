import { app } from "../app";
import request from "supertest";
import { Client } from "pg";

import { AppDataSource } from '../database/dataSource';

beforeAll(async () => {
  // connect with DB before tests
  await AppDataSource.initialize();
});

afterAll(async () => {
  // desconect from database after tests
  await AppDataSource.destroy(); 
});

describe("Register user controller", () => {
  it("Should be able to create a new user", async () => {
    const data = {
      name: "tester",
      email: "tester@itester.com",
      username: "testering",
      password: "tester123"
    };

    const response = await request(app).post('/register').send(data);
    
    const { password, ...userData } = data;
    const { id: _, ...userResponse } = response.body;

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

    expect(userResponse).toStrictEqual(userData);
  });
})