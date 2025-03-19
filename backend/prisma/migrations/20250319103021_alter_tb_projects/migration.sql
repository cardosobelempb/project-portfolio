/*
  Warnings:

  - The `img_uri` column on the `projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `level` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - Added the required column `type` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "type" TEXT NOT NULL,
DROP COLUMN "img_uri",
ADD COLUMN     "img_uri" TEXT[],
ALTER COLUMN "level" SET DATA TYPE INTEGER;
