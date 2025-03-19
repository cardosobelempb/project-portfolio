-- CreateTable
CREATE TABLE "TechnologiesOnProjects" (
    "technologyId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "TechnologiesOnProjects_pkey" PRIMARY KEY ("technologyId","projectId")
);

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnologiesOnProjects" ADD CONSTRAINT "TechnologiesOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
