import { NextFunction, Request, Response } from "express";
import JWT, { JwtPayload } from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";

export const authMiddleware = async ( req: Request, res: Response, next: NextFunction ) => {
  const { authorization } = req.headers;
  if(!authorization) return res.status(401).json({ message: "User without authorization" });

  const jwt = authorization.split(' ')[1];
  const { username } = JWT.verify(jwt, process.env.JWT_PASS || '') as JwtPayload;

  const user = await UserRepository.findOne({where: { username }});
  if(!user) return res.status(404).json({ message: "User not found" });
};