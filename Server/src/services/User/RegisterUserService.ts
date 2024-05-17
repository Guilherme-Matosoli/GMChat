import { Repository } from "typeorm";
import { User } from "../../database/entities/User";
import { genUserId } from "../../utils/genUserId";

import bcrypt from "bcrypt";

export class RegisterUserService{
  constructor( private userRepository: Repository<User> ){};

  async register( { name, email, username, password }: Omit< User, "id" > ){
    try{
      const emailExist = await this.userRepository.findOne({ where: { email: email.toLowerCase() } });
      if(emailExist) return "Email already exists";
      
      const userExist = await this.userRepository.findOne({ where: { username: username.toLowerCase() } });
      if(userExist) return "Username already exists";

      const hashPassowrd = await bcrypt.hash(password, 15);
      const user = this.userRepository.create({
        id: genUserId(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        username: username.toLowerCase().trim(),
        password: hashPassowrd
      });
  
      await this.userRepository.save(user);

      const unstructuredUser = user;
      const { password: _, ...restUser } = unstructuredUser; 
   
      return restUser;
    }
    catch(err){
      console.log(err)
    }
  };
};
