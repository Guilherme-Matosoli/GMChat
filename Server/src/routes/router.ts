import { Router } from 'express';
import cors from 'cors';
import { RegisterUserController } from '../controllers/RegisterUserController';
import { LoginUserController } from '../controllers/LoginUserController';

export const router = Router();
router.use(cors());

//User register
router.post('/register', new RegisterUserController().register);

//User login
router.post('/login', new LoginUserController().login);