import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import { MessageRepository } from "../repositories/MessageRepository";
import { UserRepository } from "../repositories/UserRepository";
import { ChatRepository } from "../repositories/ChatRepository";

export class CreateMessageController{
  constructor(){ this.create = this.create.bind(this); };

  private checkFields( fields: string[], res: Response ){
    let missingFields: boolean = false;
    fields.map(fields => {
      if(!fields) missingFields = true;
    })
  };

  async create( req: Request, res: Response ){
    try{
      const { chatId, sender } = req.body;
      this.checkFields([chatId,sender], res)
      
      const createMessageService = new CreateMessageService(MessageRepository, UserRepository, ChatRepository);

      const message = await createMessageService.create({ chatId, sender });
      if(message == "Message sender doesn't exists" || "Chat doesn't exists") return res.status(404).json({ message });

      return res.status(201).json(message);
    }
    catch(err){
      console.log(err)
      return res.status(500).json({ message: "Internal Server Error" })
    };
  };
};