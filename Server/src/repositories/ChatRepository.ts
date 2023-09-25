import { AppDataSource } from "../database/dataSource";
import { Chat } from "../database/entities/Chat";


export const ChatRepository = AppDataSource.getRepository(Chat);