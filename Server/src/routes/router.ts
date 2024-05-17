import { Router } from 'express';
import cors from 'cors';

import { RegisterUserController } from '../controllers/User/RegisterUserController';
import { LoginUserController } from '../controllers/User/LoginUserController';
import { CreateChatController } from '../controllers/Chat/CreateChatController';
import { ListChatController } from '../controllers/Chat/ListChatController';
import { SearchUserController } from '../controllers/User/SearchUserController';
import { CreateMessageController } from '../controllers/Message/CreateMessageController';
import { ListMessageController } from '../controllers/Message/ListMessageController';

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

//List messages
router.get('/message/list/:chatId', new ListMessageController().list);