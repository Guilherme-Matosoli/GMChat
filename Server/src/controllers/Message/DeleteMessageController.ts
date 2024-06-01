import { Request, Response } from "express";
import { DeleteMessageService } from "../../services/Message/DeleteMessageService";
import { MessageRepository } from "../../repositories/MessageRepository";
import { ChatRepository } from "../../repositories/ChatRepository";
import { User } from "../../database/entities/User";


export class DeleteMessageController {
  async delete(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      const { username }: User = JSON.parse(req.headers.cookie);

      const deleteMessageService = new DeleteMessageService(MessageRepository, ChatRepository);

      const messageDelete = await deleteMessageService.delete({ chatId, username });
      if (messageDelete == "User is not in chat.") return res.status(401).json({ message: messageDelete });

      return res.status(200).json({ message: messageDelete })
    }
    catch (err) {
      return res.status(500).json({ message: "Internal server error" })
    }
  };
};
