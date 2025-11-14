const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const connectToMongo = require('./util/dbConfig.js');
const reservationRoutes = require('./routes/reservationRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

const allowedBaseDomains = [
 'localhost'
];

const isAllowedOrigin = (origin) => {
  if (!origin) return true; 
  try {
    const url = new URL(origin);
    const hostname = url.hostname;

    if (allowedBaseDomains.includes(hostname)) return true;

    if (hostname.endsWith('vercel.app') && hostname.includes('project-mate')) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) callback(null, true);
      else callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => res.send('OK'));

app.use('/api/reservation', reservationRoutes);
app.use('/api/user', userRoutes);

connectToMongo();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});