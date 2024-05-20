import { Like, Repository } from "typeorm";
import { User } from "../../database/entities/User";

export class SearchUserService {
  constructor(private userRepository: Repository<User>) { };

  async search(username: string, userRequest: User) {
    try {
      const users = await this.userRepository.find({ where: { username: Like(`${username.trim()}%`) } });

      const filterUser = users.filter(user => {
        return user.username != userRequest.username
      })

      return filterUser;
    }
    catch (err) {
      console.log(err)
    }
  }

  async testsearch(username: string) {
    try {
      const users = await this.userRepository.find({ where: { username } });

      return users;
    }
    catch (err) {
      console.log(err)
    }
  }
}
