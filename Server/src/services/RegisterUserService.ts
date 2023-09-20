import { Repository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../database/entities/User";
import { IUserRepository } from "../repositories/in-memory/UserRespositoryTests";

export class RegisterUserService{
  static register: any;
  constructor( private userRepository: Omit<IUserRepository,"users"> ){};

  async register( { name, email, username, password }: any ){
    const userExist = this.userRepository.findOne({ where: { email } });
    if(userExist){
      return new Error("User already exists")
    };

    const userCreate = this.userRepository.create({
      name,
      email,
      username,
      password
    });

    return userCreate
  };
};
