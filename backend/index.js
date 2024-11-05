import express from 'express';
import { PrismaClient } from '@prisma/client';



const app =express();
const prisma = new PrismaClient();

app.use(express.json());


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

  //get all users
app.get('/users', async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  
app.listen(5002,()=>{
    console.log("server running at port 5002")
});