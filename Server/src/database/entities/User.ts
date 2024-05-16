import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Message } from './Message';

@Entity({ name: 'users', schema: 'public' })
export class User{
  @PrimaryColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text'})
  password: string;
} 
