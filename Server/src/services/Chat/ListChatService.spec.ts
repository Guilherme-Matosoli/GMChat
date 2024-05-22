
import { Chat } from "../../database/entities/Chat";
import { User } from "../../database/entities/User";
import { ChatRepositoryTest } from "../../repositories/in-memory/ChatRepositoryTests";
import { UserRepositoryTests } from "../../repositories/in-memory/UserRepositoryTests";
import { RegisterUserService } from "../User/RegisterUserService";
import { CreateChatService } from "./CreateChatService";
import { ListChatService } from "./ListChatService";

describe("ListChatService", () => {
  let chatRepository = ChatRepositoryTest;
  let userRepository = UserRepositoryTests;

  let listChatService: ListChatService;
  let registerUserService: RegisterUserService;
  let createChatService: CreateChatService;

  beforeAll(() => {
    registerUserService = new RegisterUserService(userRepository);
    createChatService = new CreateChatService(chatRepository, userRepository);
    listChatService = new ListChatService(chatRepository, userRepository);
  });

  it("Should list chats", async () => {
    const data = {
      name: "Testing",
      username: "abec",
      email: "testinasasssssddddddsg@a.com",
      password: "testing123"
    };

    const data2 = {
      name: "Testing",
      username: "abec",
      email: "tasestasdasiang@s.com",
      password: "testing123"
    };

    await Promise.all([
      registerUserService.register(data),
      registerUserService.register(data2)
    ]);


    const chatData = {
      userSender: data.username,
      userReceiver: data2.username
    };

    await createChatService.create(chatData);

    const findChat = await listChatService.list({ username: data.username });

    expect(findChat[0]).toHaveProperty("id");

  });
});
