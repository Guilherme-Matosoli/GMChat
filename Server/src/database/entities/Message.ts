import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Chat } from "./Chat";
import { User } from "./User";

@Entity({ name: 'messages', schema: 'public' })
export class Message {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => Chat, chat => chat.id)
  @JoinColumn({ name: 'chatId', referencedColumnName: 'id' })
  chatId: Chat

  @ManyToOne(() => User, user => user.username, { eager: true })
  @JoinColumn({ name: 'user', referencedColumnName: 'username' })
  user: Omit<User, "password">

  @Column({ type: 'text' })
  content: string

  @Column({ type: 'timestamptz' })
  time: Date
};
