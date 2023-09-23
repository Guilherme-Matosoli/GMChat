import { User } from "../database/entities/User";
import { IUserRepository } from "../repositories/in-memory/UserRespositoryTests";
import { genUserId } from "../utils/genUserId";

import bcrypt from "bcrypt";

export class RegisterUserService{
  static register: User;
  constructor( private userRepository: Omit<IUserRepository,"users"> ){};

  async register( { name, email, username, password }: Omit< User, "id" > ){
    try{
      const userExist = await this.userRepository.findOne({ where: { email: email.toLowerCase() } });
      if(userExist) return "User already exists";

      const hashPassowrd = await bcrypt.hash(password, 15);
      const user = this.userRepository.create({
        id: genUserId(),
        name,
        email: email.toLowerCase(),
        username,
        password: hashPassowrd
      });
  
      await this.userRepository.save(user);
   
      return user
    }
    catch(err){
      console.log(err)
    }
  };
};
