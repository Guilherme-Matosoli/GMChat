import { Router } from 'express';
import cors from 'cors';

export const mainRouter = Router();
mainRouter.use(cors());

mainRouter.get('/', ( req, res ) => {
  res.status(200).send('OK, all right')
})