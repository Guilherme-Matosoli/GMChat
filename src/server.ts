import 'dotenv/config';
import express from 'express';

const app = express();

const { PORT } = process.env;
app.listen( PORT, () => console.log(`Server is running on port ${ PORT }👻`) )