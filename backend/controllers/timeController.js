import TimeEntryModel from '../models/timeModel.js';

export const handleCreateTimeEntry = async (req, res) => {
  try {
    console.log('Request Object:', req); // Log the entire request object

    const { entryTime, lunchBreakStart, lunchBreakEnd, exitTime, userId } = req.body;
    console.log('Request Body:', req.body); // Log the body

    // Validate the input data
    if (!entryTime || !lunchBreakStart || !lunchBreakEnd || !exitTime || !userId) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Convert the string dates into Date objects
    const newEntryTime = new Date(entryTime);
    const newLunchBreakStart = new Date(lunchBreakStart);
    const newLunchBreakEnd = new Date(lunchBreakEnd);
    const newExitTime = new Date(exitTime);

    // Check if any date conversion failed
    if (isNaN(newEntryTime) || isNaN(newLunchBreakStart) || isNaN(newLunchBreakEnd) || isNaN(newExitTime)) {
      return res.status(400).json({ error: "Invalid date format." });
    }

    // Create the time entry using the model
    const timeEntry = await TimeEntryModel.create({
      entryTime: newEntryTime,
      lunchBreakStart: newLunchBreakStart,
      lunchBreakEnd: newLunchBreakEnd,
      exitTime: newExitTime,
      userId,
    });

    return res.status(201).json({
      message: 'Time entry created successfully.',
      timeEntry,
    });
  } catch (error) {
    console.error('Error creating time entry:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

