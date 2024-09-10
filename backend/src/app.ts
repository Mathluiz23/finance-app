import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import sequelize from './config/database';

const app = express();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
  res.send('Finance App API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error: ' + err));
