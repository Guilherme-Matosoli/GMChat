import { Repository } from "typeorm"
import { User } from "../../database/entities/User"
import { genUserId } from "../../utils/genUserId";

export interface IUserRepository  extends Repository<User>{
  users: Array<User>
}

export const UserRepositoryTests= {
  users: [],
  create({ name, username, password, email }: User): Omit<User, "password" | "sentChats" | "receivedChats" | "chats"> {
    const user = { id: genUserId(), name, username, password, email };
    return user;
  },

  save(user: User){
    this.users.push(user)
  },

  findOne( { where: { property } } : any ) {
    let exists = false;
    this.users.map(user => {
      if(user[property] == property) exists = user
    })

    return exists
  }

} as unknown as IUserRepository; 