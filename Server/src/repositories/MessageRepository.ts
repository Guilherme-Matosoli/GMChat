import { AppDataSource } from "../database/dataSource";
import { Message } from "../database/entities/Message";

export const MessageRepository = AppDataSource.getRepository(Message);