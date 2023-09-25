import { ChatRepositoryTest } from "../repositories/in-memory/ChatRepositoryTest";
import { CreateChatService } from "./CreateChatService";

describe("CreateChatService", () => {
  let chatService;

  beforeAll(() => {
    chatService = new CreateChatService(ChatRepositoryTest);
  })

  it("Should be able to create a new chat", async () => {
    const data = {
      userSender: "grugo",
      userReceiver: "Jeff"
    };

    const chat = await chatService.create(data);

    expect(chat).toHaveProperty("id")
  })
})