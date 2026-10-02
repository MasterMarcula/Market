import express from 'express';
import chalk from 'chalk';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Kyubo Papi!');
});

app.listen(port, () => {
  console.log(chalk.cyan.blackBright(`Esto corre por el puerto ${port}`));
});