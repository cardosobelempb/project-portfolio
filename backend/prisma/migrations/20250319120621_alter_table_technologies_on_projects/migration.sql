/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `technologies_on_projects` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `technologies_on_projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "technologies_on_projects" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";
