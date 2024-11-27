import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const TimeEntryModel = {
  async create(data) {
    try {
      const newTimeEntry = await prisma.timeEntry.create({
        data: {
          entryTime: new Date(data.entryTime),
          lunchBreakStart: new Date(data.lunchBreakStart),
          lunchBreakEnd: new Date(data.lunchBreakEnd),
          exitTime: new Date(data.exitTime),
          userId: data.userId,
        },
      });
      return newTimeEntry;
    } catch (error) {
      throw new Error("Error creating time entry: " + error.message);
    }
  },

  async findAll() {
    return await prisma.timeEntry.findMany({ include: { user: true } });
  },

  async findById(id) {
    return await prisma.timeEntry.findUnique({ where: { id } });
  },

  async findByUser(userId) {
    return await prisma.timeEntry.findMany({ where: { userId } });
  },

  async update(id, data) {
    return await prisma.timeEntry.update({ where: { id }, data });
  },

  async delete(id) {
    return await prisma.timeEntry.delete({ where: { id } });
  },
};

export default TimeEntryModel;
