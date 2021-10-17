import express, { json } from 'express';
import { db } from './database/db';
import { router } from './routes';

const app = express();
app.use(router);
app.use(json);

app.listen(process.env.APP_PORT, async () => {
  await db.sync();
  console.log(`App runing`);
});
