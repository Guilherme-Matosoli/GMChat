import { Request, Response } from "express";
import { LoginUserService } from "../services/LoginUserService";
import { UserRepository } from "../repositories/UserRepository";


export class LoginUserController{

  constructor() { this.login = this.login.bind(this) };

  private checkFields(fields: string[], res: Response){
    let missingFields: boolean = false;
    fields.map(fields => {
      if(!fields) missingFields = true;
    });

    if(missingFields) return res.status(422).json( { message: "Missing fields" } );
  } 

  async login( req: Request, res: Response ){
    const { email, password } = req.body;
    this.checkFields([email, password], res);

    try{
      const loginUserService = new LoginUserService(UserRepository);

      const userLog = await loginUserService.login({ email, password });
      if(userLog == "Invalid email or password") return res.status(401).json( { message: userLog } );

      res.status(200).json( userLog );
    }

    catch(err){
      console.log(err);
      res.status(500).json( { message: "Internal server error" } );
    }
  }

}