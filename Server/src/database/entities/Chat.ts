import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity("chats")
export class Chat{
  @PrimaryColumn()
  id: string

  @ManyToOne(() => User, user => user.username)
  @JoinColumn({ name: 'userSender', referencedColumnName: "username" })
  userSender: User

  @ManyToOne(() => User, user => user.username)
  @JoinColumn({ name: 'userReceiver', referencedColumnName: "username" })
  userReceiver: User
};