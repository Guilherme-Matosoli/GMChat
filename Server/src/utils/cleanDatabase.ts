import { Client } from "pg";

export async function cleanDatabase(){
  
  const client = new Client({
    host: "localhost",
    port: 5432,
    password: "12345678",
    application_name: "postgres",
    user: "postgres",
    database: "postgres"
  });

  await client.connect();
  await client.query('DELETE FROM chats;');
  await client.query('DELETE FROM users;');

}