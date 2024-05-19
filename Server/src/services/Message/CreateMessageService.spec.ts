import { Repository } from "typeorm";
import { CreateMessageService } from "./CreateMessageService";
import { Message } from "../../database/entities/Message";
import { User } from "../../database/entities/User";
import { Chat } from "../../database/entities/Chat";

describe("CreateMessageService", () => {
  let messageRepository: Repository<Message>;
  let userRepository: Repository<User>;
  let chatRepository: Repository<Chat>;

  let createMessageService: CreateMessageService;

  beforeAll(() => {
    
    //createMessageService = new CreateMessageService()
  });


  it("Should be able to create a new message", () => {

  });
});