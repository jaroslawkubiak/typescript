import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

// adding body property to req object
app.use(bodyParser.urlencoded({ extended: true }));

// 
app.use(cookieSession({ keys: ['fdfdfd'] }));


app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
