import express, { json } from 'express';
import { db } from './database/db';
import { router as UserRoutes } from './routes/UserRoutes';
import { router as PostRoutes } from './routes/PostRoutes';
import { router as CommentsRoutes } from './routes/CommentsRoutes';

const app = express();
app.use(json());
app.use(UserRoutes);
app.use(PostRoutes);
app.use(CommentsRoutes);

app.listen(process.env.APP_PORT, async () => {
  await db.sync();
  console.log(`App runing`);
});
