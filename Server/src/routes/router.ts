import { Router } from 'express';
import cors from 'cors';
import { RegisterUserController } from '../controllers/RegisterUserController';

export const router = Router();
router.use(cors());

router.post('/register', new RegisterUserController().register);
