import express from 'express';
import { handleCreateTimeEntry } from '../controllers/timeController.js';

const router = express.Router();

// Route to create a time entry
router.post('/addtime', handleCreateTimeEntry);

export default router;
