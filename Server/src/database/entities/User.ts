import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chat } from './Chat';

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({type: 'text', unique: true})
  email: string;

  @Column({type: 'text'})
  password: string;

  @OneToMany(() => Chat, chat => chat.userSender)
  private sentChats?: Chat[];
  
  @OneToMany(() => Chat, chat => chat.userReceiver)
  private receivedChats?: Chat[];

  get chats(): Chat[] {
    return [...this.sentChats, ...this.receivedChats];
  }
} 
