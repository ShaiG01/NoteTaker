import express from 'express';
import router from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB().then(()=>{
  app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
});

//middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true
}));
app.use(rateLimiter);


app.use('/api/notes', router)




