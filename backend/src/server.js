import express from 'express';
import router from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const __dirname = path.resolve()

connectDB().then(()=>{
  app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
});

//middleware
app.use(express.json());

if(process.env.NODE_ENV === "development"){
  app.use(cors({
  origin: 'https://notetaker-bc1v.onrender.com/api/notes', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true
}));
app.use(rateLimiter);
}



app.use('/api/notes', router)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '../frontend/NoteTaker/dist')))

  app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, '../frontend/NoteTaker', "dist", "index.html"))
});
}