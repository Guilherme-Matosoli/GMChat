import { Request, Response } from "express";
import { ListChatService } from "../services/ListChatService";
import { ChatRepository } from "../repositories/ChatRepository";

export class ListChatController{
  constructor(){ this.list = this.list.bind(this) };

  private checkFields( fields: string[], res: Response ){
    let missingFields: boolean = false;
    fields.map(fields => {
      if(!fields) missingFields = true;
    })
  };

  async list( req: Request, res: Response ){
    const { username } = req.params;
    this.checkFields([username], res);

    try{
      const listChatService = new ListChatService(ChatRepository);
  
      const response = await listChatService.list({ username });
  
      return res.status(200).json(response);
    }
    catch(err){
      console.log(err)
    };
  };
};