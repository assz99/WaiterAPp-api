import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001;
    app.listen(port,() => {
      console.log(`Server rodando na porta ${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));


