import { Request, Response } from "express";
import { User } from "../../database/entities/User";
import { DeleteChatService } from "../../services/Chat/DeleteChatService";
import { ChatRepository } from "../../repositories/ChatRepository";
import { MessageRepository } from "../../repositories/MessageRepository";

export class DeleteChatController {
  async delete(req: Request, res: Response) {
    try {
      const { chatId } = req.params;
      const { username }: User = JSON.parse(req.headers.cookie);

      const deleteChatService = new DeleteChatService(ChatRepository, MessageRepository);
      const deleteChats = await deleteChatService.delete({ chatId, username });
      if (deleteChats == "User is not in chat.") return res.status(401).json({ message: deleteChats });

      return res.status(200).json({ message: deleteChats })
    }
    catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    };
  };
};
