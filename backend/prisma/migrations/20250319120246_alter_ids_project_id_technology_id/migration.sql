/*
  Warnings:

  - The primary key for the `technologies_on_projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectId` on the `technologies_on_projects` table. All the data in the column will be lost.
  - You are about to drop the column `technologyId` on the `technologies_on_projects` table. All the data in the column will be lost.
  - Added the required column `project_id` to the `technologies_on_projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technology_id` to the `technologies_on_projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "technologies_on_projects" DROP CONSTRAINT "technologies_on_projects_projectId_fkey";

-- DropForeignKey
ALTER TABLE "technologies_on_projects" DROP CONSTRAINT "technologies_on_projects_technologyId_fkey";

-- AlterTable
ALTER TABLE "technologies_on_projects" DROP CONSTRAINT "technologies_on_projects_pkey",
DROP COLUMN "projectId",
DROP COLUMN "technologyId",
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "technology_id" TEXT NOT NULL,
ADD CONSTRAINT "technologies_on_projects_pkey" PRIMARY KEY ("technology_id", "project_id");

-- AddForeignKey
ALTER TABLE "technologies_on_projects" ADD CONSTRAINT "technologies_on_projects_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technologies_on_projects" ADD CONSTRAINT "technologies_on_projects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
