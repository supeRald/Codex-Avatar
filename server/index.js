import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const app = express();
app.use(cors());
app.use(express.json());

const chance = new Chance();

const users = [...Array(250).keys()].map((id) => {
  return {
    id,
    name: chance.name(),
    avatar: 'https://example.com/avatar', // Placeholder URL for avatar image
    company: chance.company(),
    email: chance.email(),
  };
});

app.get('', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const results = users.filter((user) => user.name.toLowerCase().includes(q));
  res.json(results);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
