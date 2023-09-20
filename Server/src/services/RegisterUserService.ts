import { User } from "../database/entities/User";
import { IUserRepository } from "../repositories/in-memory/UserRespositoryTests";
import { genUserId } from "../utils/genUserId";

export class RegisterUserService{
  static register: any;
  constructor( private userRepository: Omit<IUserRepository,"users"> ){};

  async register( { name, email, username, password }: Omit< User, "id" > ){
    const userExist = await this.userRepository.findOne({ where: { email } });
    if(userExist){
      return "User already exists"
    };

    const user = this.userRepository.create({
      id: genUserId(),
      name,
      email,
      username,
      password
    });

    await this.userRepository.save(user);

    return user
  };
};
