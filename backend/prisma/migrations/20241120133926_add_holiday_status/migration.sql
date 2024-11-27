/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Holiday` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Holiday` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Holiday" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
