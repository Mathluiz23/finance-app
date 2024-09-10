import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

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
