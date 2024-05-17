import request from "supertest";
import { app } from "../../app";
import { AppDataSource } from "../../database/dataSource";

import { cleanDatabase } from "../../utils/cleanDatabase";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Create chat controller", () => {
  it("Should be able to create a chat", async () => {
    const grugo = { 
      name: "Grugo",
      username: "grugo",
      email: "grugo@gmail.com",
      password: "testing123"
    };
    const jeff = { 
      name: "Jeff",
      username: "jeff",
      email: "jeff@gmail.com",
      password: "testing123"
    };

    await request(app).post("/register").send(grugo)
    await request(app).post("/register").send(jeff)

    const data = {
      userSender: "grugo",
      userReceiver: "jeff"
    };

    const chat = await request(app).post("/chat/create").send(data);

    await cleanDatabase();

    expect(chat.body).toHaveProperty("id")
  })
})