import prisma from "../models/userModel.js";

// Fonction pour créer une demande de congé
export const createHoliday = async (req, res) => {
  try {
    const { startDate, endDate, description, userId } = req.body;

    if (!startDate || !endDate || !userId) {
      return res.status(400).json({ error: 'Start date, end date, and userId are required.' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Créer une demande de congé avec un statut "pending"
    const holiday = await prisma.holiday.create({
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        description: description || null,
        status: 'pending', // Statut initial "pending"
        userId,
      },
    });

    return res.status(201).json(holiday);
  } catch (error) {
    console.error('Error creating holiday:', error); // Affichage du message d'erreur
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};

export const updateHolidayStatus = async (req, res) => {
  try {
    const { holidayId, status } = req.body;

    // Vérifier si les informations nécessaires sont présentes
    if (!holidayId || !['accepted', 'rejected'].includes(status)) {
      return res.status(400).json({
        error: 'Holiday ID and a valid status (accepted/rejected) are required.',
      });
    }

    // Vérifier si la demande de congé existe
    const holiday = await prisma.holiday.findUnique({
      where: { id: holidayId },
    });

    if (!holiday) {
      return res.status(404).json({ error: 'Holiday not found.' });
    }

    // Vérifier si la demande est déjà traitée
    if (holiday.status !== 'pending') {
      return res.status(400).json({ error: 'Holiday status cannot be updated anymore.' });
    }

    // Mettre à jour le statut de la demande
    const updatedHoliday = await prisma.holiday.update({
      where: { id: holidayId },
      data: { status }, // Le statut devient "accepted" ou "rejected"
    });

    return res.status(200).json({
      message: `Holiday ${status} successfully.`,
      holiday: updatedHoliday,
    });
  } catch (error) {
    console.error('Error updating holiday status:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
