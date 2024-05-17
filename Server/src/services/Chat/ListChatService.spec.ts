
import { Chat } from "../../database/entities/Chat";
import { ChatRepositoryTest } from "../../repositories/in-memory/ChatRepositoryTest";
import { UserRepositoryTests } from "../../repositories/in-memory/UserRepositoryTests";
import { RegisterUserService } from "../User/RegisterUserService";
import { CreateChatService } from "./CreateChatService";
import { ListChatService } from "./ListChatService";

describe("ListChatService", () => {
  let listChatService: ListChatService;
  let registerUserService: RegisterUserService;
  let createChatService: CreateChatService;

  beforeAll(() => {
    registerUserService = new RegisterUserService(UserRepositoryTests);
    createChatService = new CreateChatService(ChatRepositoryTest, UserRepositoryTests);
    listChatService = new ListChatService(ChatRepositoryTest, UserRepositoryTests);
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

    await Promise.all([await registerUserService.register(data), await registerUserService.register(data2)]);

    const chatData = {
      userSender: data,
      userReceiver: data2
    };

    await createChatService.create(chatData as Omit<Chat, "id" | "messages">);

    const findChat = await listChatService.list({ username: data.username });

    expect(findChat).toHaveProperty("id");
    
  });
});