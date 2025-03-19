/*
  Warnings:

  - You are about to drop the `TechnologiesOnProjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TechnologiesOnProjects" DROP CONSTRAINT "TechnologiesOnProjects_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TechnologiesOnProjects" DROP CONSTRAINT "TechnologiesOnProjects_technologyId_fkey";

-- DropTable
DROP TABLE "TechnologiesOnProjects";

-- CreateTable
CREATE TABLE "technologies_on_projects" (
    "technologyId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "technologies_on_projects_pkey" PRIMARY KEY ("technologyId","projectId")
);

-- AddForeignKey
ALTER TABLE "technologies_on_projects" ADD CONSTRAINT "technologies_on_projects_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technologies_on_projects" ADD CONSTRAINT "technologies_on_projects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
