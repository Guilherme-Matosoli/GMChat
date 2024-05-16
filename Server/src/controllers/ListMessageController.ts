import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessageService";
import { MessageRepository } from "../repositories/MessageRepository";
import { UserRepository } from "../repositories/UserRepository";


export class ListMessageController{
  constructor() { this.list = this.list.bind(this); };

  private checkFields( fields: string[], res: Response ){
    let missingFields: boolean = false;
    fields.map(fields => {
      if(!fields) missingFields = true;
    })
  };

  async list(req: Request, res: Response){
    try{
      const { chatId } = req.params;
      this.checkFields([chatId], res);

      const listMessageService = new ListMessageService(MessageRepository, UserRepository);

      const messages = await listMessageService.list({ chatId });

      return res.status(200).json({ messages });
    }
    catch(err){
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
};