import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const HolidayModel = {
  async create(data) {
    return await prisma.holiday.create({ data });
  },
  async findAll() {
    return await prisma.holiday.findMany({ include: { user: true } });
  },
  async findById(id) {
    return await prisma.holiday.findUnique({ where: { id } });
  },
  async findByUser(userId) {
    return await prisma.holiday.findMany({ where: { userId } });
  },
  async update(id, data) {
    return await prisma.holiday.update({ where: { id }, data });
  },
  async delete(id) {
    return await prisma.holiday.delete({ where: { id } });
  },
};

export default HolidayModel;
