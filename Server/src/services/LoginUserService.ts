import { IUserRepository } from "../repositories/in-memory/UserRespositoryTests";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUserService{
  constructor( private userRepository: Omit< IUserRepository, "users" > ) {};
  
  async login( { email, password } ){
    try{
      const user = await this.userRepository.findOne({ where: {email}  });
      if(!user) return "Invalid email or password";

      const verifyPass = bcrypt.compare(password, user.password);
      if(!verifyPass) return "Invalid email or password";

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_PASS ?? '',
        { expiresIn: "30d" } 
      );

      const {password: _, ...userLog} = user;
      return { token, user: userLog };
    }

    catch(err){
      console.log(err)
    }
  }
}