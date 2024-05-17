import { Client } from "pg";

const DBPORT = process.env.DBPORT;
const DBPASS = process.env.DBPASS;

export const testsClient = new Client({
  host: "localhost",
  port: DBPORT as unknown as number,
  password: DBPASS,
  application_name: "postgres",
  user: "postgres",
  database: "postgres"
});