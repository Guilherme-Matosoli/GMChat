import { FindOptionsWhere, Repository } from "typeorm"
import { User } from "../../database/entities/User"

import { randomUUID } from "crypto";

export interface IUserRepository  extends Repository<User>{
  users: Array<User>
}

export const UserRepositoryTests= {
  users: [],
  create({ name, username, password, email }: User): Omit<User, "password"> {

    const user = { id: randomUUID(), name, username, password, email };
    this.users.push(user)

    const { password: _, ...userWhithoutPass } = user;

    return userWhithoutPass;
  },

  findOne( { where: { email } } : any ) {
    let exists = false;
    this.users.map(user => {
      if(user.email == email) exists = true
    })

    return exists
  }

} as unknown as IUserRepository; 