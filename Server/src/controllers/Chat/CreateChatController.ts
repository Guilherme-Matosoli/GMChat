import { Request, Response } from "express";
import { CreateChatService } from "../../services/Chat/CreateChatService";
import { ChatRepository } from "../../repositories/ChatRepository";
import { UserRepository } from "../../repositories/UserRepository";

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
      const createChatService = new CreateChatService(ChatRepository, UserRepository);
      
      const chat = await createChatService.create({userSender, userReceiver});
      if(chat == "Can not find user sender" || chat == "Can not find user receiver") return res.status(404).json({ message: chat });
      if(chat == "Chat already exists") return res.status(409).json({ message: chat })

      return res.status(200).json(chat);
    }
    catch(err){
      console.log(err)
      res.status(500).json({ message: "Internal server error" })
    }
  };
}; 