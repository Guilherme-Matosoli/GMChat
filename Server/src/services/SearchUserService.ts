import { Like, Repository } from "typeorm";
import { User } from "../database/entities/User";

export class SearchUserService{
  constructor( private userRepository: Repository<User> ){};

  async search(username: string){
    try{
      const users = await this.userRepository.find({ where: { username: Like(`${username}%`) } });
      
      return users;
    }
    catch(err){
      console.log(err)
    }
  }
}