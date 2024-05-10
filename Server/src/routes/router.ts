import { Router } from 'express';
import cors from 'cors';

import { RegisterUserController } from '../controllers/RegisterUserController';
import { LoginUserController } from '../controllers/LoginUserController';
import { CreateChatController } from '../controllers/CreateChatController';
import { ListChatController } from '../controllers/ListChatController';
import { SearchUserController } from '../controllers/SearchUserController';
import { CreateMessageController } from '../controllers/CreateMessageController';

export const router = Router();
router.use(cors());

//User register
router.post('/register', new RegisterUserController().register);

//User login
router.post('/login', new LoginUserController().login);

//Create a new chat
router.post('/chat/create', new CreateChatController().create);

//List user chats
router.get('/chat/list/:username', new ListChatController().list);

//List users by username
router.get('/users/:username', new SearchUserController().search);

//Create a message
router.post('/message/create', new CreateMessageController().create);