import { Request, Response } from 'express';
import { SearchUserService } from '../services/SearchUserService';
import { UserRepository } from '../repositories/UserRepository';

export class SearchUserController{

  async search(req: Request, res: Response){
    try{
      const { username } = req.params;
      const searchService = new SearchUserService(UserRepository);
      
      const users = await searchService.search(username);

      const usersWithoutPass = users.map(user => {
        const { password: _, ...rest } = user;

        return rest;
      });

      if(users.length >= 1) return res.status(200).json(usersWithoutPass);
      return res.status(404).json({ message: "User not found" });
    }
    catch{
      return res.status(500).json({ message: "Internal Server Error" }); 
    }
  }

}