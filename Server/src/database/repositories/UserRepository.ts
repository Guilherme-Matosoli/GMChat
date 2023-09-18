import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

export const UserRepository = AppDataSource.getRepository(User);