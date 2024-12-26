import express from 'express';
import {createHoliday, updateHolidayStatus} from '../controllers/holidayController.js';
//import { authenticateToken } from '../middlewares/authMiddleware.js';  // Middleware pour vérifier le token JWT


const router = express.Router();

// Route  holiday
router.post('/add',  createHoliday);
router.put('/updateHolidayStatus',  updateHolidayStatus);


export default router;
