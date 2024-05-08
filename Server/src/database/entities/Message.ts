import { Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";
import { Chat } from "./Chat";
import { User } from "./User";

@Entity('messages')
export class Message{
  @PrimaryColumn()
  id: string

  @ManyToMany(() => Chat, chat => chat.id)
  @JoinColumn({ referencedColumnName: 'id' })
  chatId: string

  @ManyToMany(() => User, user => user.username)
  @JoinColumn({ referencedColumnName: 'usernmame' })
  sender: string
};