import { Request, Response } from "express";
import { ListChatService } from "../services/ListChatService";
import { ChatRepository } from "../repositories/ChatRepository";

export class ListChatController{
  async list( req: Request, res: Response ){
    const { username } = req.params;

    try{
      const listChatService = new ListChatService(ChatRepository);
  
      const response = await listChatService.list({ username });
  
      return res.status(200).json(response);
    }
    catch(err){
      console.log(err)
    }
    
  }
} 