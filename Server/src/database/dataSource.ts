import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const { DBHOST, DBPORT, DBNAME, DBUSER, DBPASS } = process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DBHOST,
  port: DBPORT as unknown as number,
  username: DBUSER,
  password: DBPASS,
  database: DBNAME,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  synchronize: false,
  ssl: false
});
