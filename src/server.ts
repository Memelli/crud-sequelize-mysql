import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log(`${process.env.USER_NAME} hellocaraio`);
});
