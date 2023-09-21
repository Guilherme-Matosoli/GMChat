import { IUserRepository } from "../repositories/in-memory/UserRespositoryTests";

export class LoginUserService{
  constructor( private userRepository: Omit< IUserRepository, "users" > ) {};
  
  async login( { email, password } ){
    try{

    }
    catch(err){
      console.log(err)
    }
  }
}