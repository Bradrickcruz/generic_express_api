const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config;

dotenv();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.get('/', (request, response) => {
  response.status(200).json({ message: 'API funcionando.', status: 200 });
});

try {
  app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}.`));
} catch (error) {
  console.log(error);
}
