import { Request, Response } from "express";
import { CreateChatService } from "../services/CreateChatService";
import { ChatRepository } from "../repositories/ChatRepository";

export class CreateChatController{
  constructor(){ this.create = this.create.bind(this); };

  private checkFields( fields: string[], res: Response ){
    let missingFields: boolean = false;
    fields.map(fields => {
      if(!fields) missingFields = true;
    });

    if(missingFields) return res.status(422).json( { message: "Missing fields" } );
  };

  async create( req: Request, res: Response ){
    const { userSender, userReceiver } = req.body;
    this.checkFields([userSender, userReceiver], res);

    try{
      const createChatService = new CreateChatService(ChatRepository);
      
      const chat =await createChatService.create({userSender, userReceiver});

      return res.status(200).json(chat);
    }
    catch(err){
      console.log(err)
      res.status(500).json({ message: "Internal server error" })
    }
  };
}; 