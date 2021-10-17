import express, { json } from 'express';
import { db } from './database/db';
import { router as UserRoutes } from './routes/UserRoutes';
import { router as PostRoutes } from './routes/PostRoutes';

const app = express();
app.use(json());
app.use(UserRoutes);
app.use(PostRoutes);

/* db.sync({ force: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  }); */
app.listen(process.env.APP_PORT, async () => {
  await db.sync();
  console.log(`App runing`);
});
