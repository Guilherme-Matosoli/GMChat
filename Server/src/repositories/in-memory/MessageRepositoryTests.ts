import { Repository } from "typeorm"
import { Message } from "../../database/entities/Message";

export interface IMessageRepository extends Repository<Message> {
  messages: Array<Message>
};

export const messageRepositoryTest = {
  messages: [],
  create({ id, user, content }: Message) {
    const message = { id, user, content };
    return message;
  },

  save(message: Message) {
    this.messages.push(message);
  },

  findOne({ where }: any) {
    let exists: boolean | Message = false;
    const primaryKeys = Object.keys(where);

    const keysInPrimaryKeys = primaryKeys.map(key => {
      return Object.keys(where[key])[0];
    });

    this.messages.map((message: Message) => {

      primaryKeys.map(primaryKey => {
        let allKeysMatch = 0;

        keysInPrimaryKeys.map(secKey => {
          if (message[primaryKey] == where[primaryKey][secKey]) allKeysMatch++;
        });

        if (allKeysMatch == keysInPrimaryKeys.length) exists = message;
      });
    });

    return exists;
  },

  delete({ chatId: { id } }) {
    const filteredMessages = this.messages.filter((message: Message) => {
      return message.chatId != id;
    });

    this.messages = filteredMessages;
  }

} as unknown as IMessageRepository; 
