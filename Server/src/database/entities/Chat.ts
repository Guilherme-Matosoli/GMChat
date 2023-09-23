import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("chats")
export class Chat{
  @PrimaryGeneratedColumn()
  id: string

  @ManyToOne(() => User, user => user.username)
  @JoinColumn({ name: 'userSender', referencedColumnName: "username" })
  userSender: User

  @ManyToOne(() => User, user => user.username)
  @JoinColumn({ name: 'userReceiver', referencedColumnName: "username" })
  userReceiver: User
}
