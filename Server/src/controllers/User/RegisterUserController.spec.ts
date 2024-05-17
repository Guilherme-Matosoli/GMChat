import { app } from "../../app";
import request from "supertest";

import { AppDataSource } from '../../database/dataSource';
import { cleanDatabase } from "../../utils/cleanDatabase";

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

    await cleanDatabase();

    expect(userResponse).toHaveProperty("status");
  });
})