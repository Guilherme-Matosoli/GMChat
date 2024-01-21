import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Chat } from './Chat';

@Entity('users')
export class User{
  @PrimaryColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;
} 
