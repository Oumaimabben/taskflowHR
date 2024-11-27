import express from 'express';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
import holidayRoutes from './routes/holidayRoutes.js';
import timeRoutes from './routes/timeRoutes.js';
import bodyParser from 'body-parser';

dotenv.config();

const app =express();
app.use(express.json());
app.use(bodyParser.json());

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  //test api
app.get('/test', (req, res) => {
    try {
      res.status(200).json({ message: 'API is working' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//ROUTES
app.use('/auth', authRoutes);
app.use('/holidays', holidayRoutes);
app.use('/time', timeRoutes); 


app.listen(5002,()=>{
    console.log("server running at port 5002")
});