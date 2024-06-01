import { Router } from 'express';
import cors from 'cors';

import { RegisterUserController } from '../controllers/User/RegisterUserController';
import { LoginUserController } from '../controllers/User/LoginUserController';
import { CreateChatController } from '../controllers/Chat/CreateChatController';
import { ListChatController } from '../controllers/Chat/ListChatController';
import { SearchUserController } from '../controllers/User/SearchUserController';
import { ListMessageController } from '../controllers/Message/ListMessageController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { GetLastMessageController } from '../controllers/Message/GetLastMessageController';
import { DeleteMessageController } from '../controllers/Message/DeleteMessageController';

export const router = Router();
router.use(cors());

//User register
router.post('/register', new RegisterUserController().register);

//User login
router.post('/login', new LoginUserController().login);

//Create a new chat
router.post('/chat/create', authMiddleware, new CreateChatController().create);

//List user chats
router.get('/chat/list/:username', authMiddleware, new ListChatController().list);

//List users by username
router.get('/users/:username', authMiddleware, new SearchUserController().search);

//List messages
router.get('/message/list/:chatId', authMiddleware, new ListMessageController().list);

//Get last message
router.get('/message/getlast/:chatId', new GetLastMessageController().get)

//Delete all messages
router.delete('/message/delete/:chatId', new DeleteMessageController().delete)
