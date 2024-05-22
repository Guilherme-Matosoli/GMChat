import { Request, Response } from "express";
import { GetLastMessageService } from "../../services/Message/GetLastMessageService";
import { MessageRepository } from "../../repositories/MessageRepository";


export class GetLastMessageController {

  async get(req: Request, res: Response) {
    try {
      const { chatId } = req.params;

      const getLastMessageService = new GetLastMessageService(MessageRepository);

      const message = await getLastMessageService.get({ chatId });

      return res.status(200).send(message);
    }
    catch (err) {
      console.log(err)
      return res.status(500).json({ message: "Internal Server Error" })
    }
  };
};
