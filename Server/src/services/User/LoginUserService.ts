import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../database/entities/User";
import { Repository } from "typeorm";

export class LoginUserService{
  constructor( private userRepository: Repository<User> ) {};
  
  async login( { email, password } ){
    try{
      const user = await this.userRepository.findOne({ where: { email: email.toLowerCase().trim() }  });
      if(!user) return "Invalid email or password";

      const verifyPass = await bcrypt.compare(password, user.password);
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