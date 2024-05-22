import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Message } from "./Message";

@Entity({ name: 'chats', schema: 'public' })
export class Chat {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => User, user => user.username)
  @JoinColumn({ name: 'userSender', referencedColumnName: "username" })
  userSender: User

  @ManyToOne(() => User, user => user.username)
  @JoinColumn({ name: 'userReceiver', referencedColumnName: "username" })
  userReceiver: User
};
