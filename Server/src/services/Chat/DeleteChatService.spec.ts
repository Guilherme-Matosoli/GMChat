import { ChatRepositoryTest } from "../../repositories/in-memory/ChatRepositoryTests";
import { MessageRepositoryTest } from "../../repositories/in-memory/MessageRepositoryTests";
import { DeleteChatService } from "./DeleteChatService";

describe("DeleteChatService", () => {
  let deleteChatService: DeleteChatService;

  beforeAll(() => {
    deleteChatService = new DeleteChatService(ChatRepositoryTest, MessageRepositoryTest);
  });


  it("Should be able to delete a chat", () => {

  });
});
