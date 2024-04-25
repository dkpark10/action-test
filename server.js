const express = require('express');
const { default: helmet } = require('helmet');
const cors = require('helmet');
const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: 'http://localhost',
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());

app.get('/api/contents', (_, res) => {
  return res.status(200).send([1, 2, 3]);
});

app.get('*', (_, res) => {
  return res.status(200).send('true');
});

app.listen(PORT, () => {
  console.log('server start');
});
