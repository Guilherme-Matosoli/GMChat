import request from "supertest";
import { app } from "../../app";
import { AppDataSource } from "../../database/dataSource";

import { testsClient } from "../../utils/testsClient";

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

    await testsClient.connect();
    await testsClient.query(`DELETE FROM users WHERE username = '${ grugo.username }'`);
    await testsClient.query(`DELETE FROM users WHERE username = '${ jeff.username }'`);
    await testsClient.query(`DELETE FROM chats WHERE userSender = '${ data.userSender }' AND userReceiver = '${ data.userReceiver }'`);

    expect(chat.body).toHaveProperty("id")
  })
})