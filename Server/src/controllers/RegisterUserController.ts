import { Request, Response } from "express";


export class RegisterUserController{
  constructor() {
    this.register = this.register.bind(this);
  }

  private checkFields( fields: string[], res: Response ){
    const missingFields = fields.some(field => !field);
    if(missingFields) return res.status(403).json( { message: "Missing fields" } );
  };

  async register( req: Request, res: Response ){
    const { name, username, email, password } = req.body; 
    this.checkFields([name, username, email, password], res)

    return res.status(200).send("Ohaio")
  }
}