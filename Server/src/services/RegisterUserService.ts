import { UserRepository } from "../database/repositories/UserRepository";

export class RegisterUserService{
  async register( { name, email, username, password }: any ){
    const userCreate = UserRepository.create({
      name,
      email,
      username,
      password
    });

    return userCreate
  };
}
