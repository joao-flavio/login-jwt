import 'reflect-metadata';
import express from 'express';
import './database/connect'
import routes from './routes';

require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);