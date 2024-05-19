import { ChatRepositoryTest } from "../../repositories/in-memory/ChatRepositoryTests";
import { UserRepositoryTests } from "../../repositories/in-memory/UserRepositoryTests";

import { RegisterUserService } from "../User/RegisterUserService";
import { CreateChatService } from "./CreateChatService";

describe("CreateChatService", () => {
  let repository;
  let chatService;
  let registerservice;

  beforeAll(() => {
    repository = UserRepositoryTests;
    chatService = new CreateChatService(ChatRepositoryTest, repository);
    registerservice = new RegisterUserService(repository);
  })

  it("Should be able to create a new chat", async () => {
    const userSender = { 
      name: "Testing",
      username: "abec",
      email: "testinasasssssddddddsg@a.com",
      password: "testing123"
    };

    const userReceiver = { 
      name: "Testing",
      username: "abecas",
      email: "tasestasdasiang@s.com",
      password: "testing123"
    };

    await registerservice.register(userSender);
    await registerservice.register(userReceiver);

    const data = {
      userSender: "abec",
      userReceiver: "abecas"
    };

    const chat = await chatService.create(data);

    expect(chat).toHaveProperty("id");
  });

  it("Shouldn't be able to create a new chat", async () => {
    const data = {
      userSender: "grugo",
      userReceiver: "Jeff"
    };

    const chat = await chatService.create(data);

    expect(chat).toEqual("Can not find user sender" || "Can not find user receiver")
  })
})