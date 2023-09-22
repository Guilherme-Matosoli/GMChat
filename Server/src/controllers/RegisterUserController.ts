import { Request, Response } from "express";

import { RegisterUserService } from "../services/RegisterUserService";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../database/entities/User";

export class RegisterUserController{
  constructor() { this.register = this.register.bind(this); };

  private checkFields( fields: string[], res: Response ){
    let missingFields: boolean = false;
    fields.map(fields => {
      if(!fields) missingFields = true;
    });

    if(missingFields) return res.status(422).json( { message: "Missing fields" } );
  };

  async register( req: Request, res: Response ){
    const { name, username, email, password } = req.body; 
    this.checkFields([name, username, email, password], res); 

    try{
      const registerService = new RegisterUserService(UserRepository);

      const user = await registerService.register({ name, username, email, password});
      if(user == "User already exists") return res.status(409).json( { message: user } );

      const unstructuredUser = user as User;
      const { password: _, ...rest } = unstructuredUser; 

      return res.status(201).json( rest );
    } 

    catch(err){
      console.log(err)
      return res.status(500).json( { message: "Internal server error" } )
    }
  }
}