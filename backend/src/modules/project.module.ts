import { Module } from "@nestjs/common"
import { DbModule } from "./db.module"
import { ProjectFindByIdController } from "src/infrastructure/controllers/project/project-find-by-id.controller"
import { ProjectManyController } from "src/infrastructure/controllers/project/project-many.controller"
import { ProjectFindByIdService } from "src/application/services/project/project-find-by-id.service"
import { ProjectRepository } from "src/application/repositories/project.repository"
import { ProjectManyService } from "src/application/services/project/project-many.service"

@Module({
	imports: [DbModule],
	controllers: [ProjectFindByIdController, ProjectManyController],
	providers: [
		{
			provide: ProjectFindByIdService,
			useFactory: (projectRepository: ProjectRepository) => {
				return new ProjectFindByIdService(projectRepository)
			},
			inject: ["ProjectRepository"],
		},
		{
			provide: ProjectManyService,
			useFactory: (projectRepository: ProjectRepository) => {
				return new ProjectManyService(projectRepository)
			},
			inject: ["ProjectRepository"],
		},
	],
})
export class ProjectModule {}
