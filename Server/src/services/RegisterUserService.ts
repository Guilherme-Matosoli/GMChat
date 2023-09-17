import { randomUUID } from 'crypto';
import { userRepository } from "../database/repositories/userRespository";


export class RegisterUserService{
  async register( { name, email, username, password }: any ){
    const userCreate = userRepository.create({
      name,
      email,
      username,
      password
    });

    return userCreate
  };
}
