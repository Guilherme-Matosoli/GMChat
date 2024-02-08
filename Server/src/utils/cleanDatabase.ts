import { Client } from "pg";

export async function cleanDatabase(){

  const { DBPORT, DBPASS } = process.env;
  
  const client = new Client({
    host: "localhost",
    port: DBPORT as unknown as number,
    password: DBPASS,
    application_name: "postgres",
    user: "postgres",
    database: "postgres"
  });

  await client.connect();
  await client.query('DELETE FROM chats;');
  await client.query('DELETE FROM users;');

}