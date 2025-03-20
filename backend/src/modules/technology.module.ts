import { Module } from "@nestjs/common"
import { TechnologyRepository } from "src/application/repositories/technology.repository"
import { TechnologyDetachedService } from "src/application/services/technology/technology-detached.service"
import { TechnologyFindByIdService } from "src/application/services/technology/technology-find-by-id.service"
import { TechnologyManyService } from "src/application/services/technology/technology-many.service"
import { TechnologyDetachedController } from "src/infrastructure/controllers/technology/technology-detached.controller"
import { TechnologyFindByIdController } from "src/infrastructure/controllers/technology/technology-find-by-id.controller"
import { TechnologyManyController } from "src/infrastructure/controllers/technology/technology-many.controller"
import { DbModule } from "./db.module"

@Module({
	imports: [DbModule],
	controllers: [
		TechnologyFindByIdController,
		TechnologyManyController,
		TechnologyDetachedController,
	],
	providers: [
		{
			provide: TechnologyFindByIdService,
			useFactory: (technologyRepository: TechnologyRepository) => {
				return new TechnologyFindByIdService(technologyRepository)
			},
			inject: ["TechnologyRepository"],
		},
		{
			provide: TechnologyManyService,
			useFactory: (technologyRepository: TechnologyRepository) => {
				return new TechnologyManyService(technologyRepository)
			},
			inject: ["TechnologyRepository"],
		},
		{
			provide: TechnologyDetachedService,
			useFactory: (technologyRepository: TechnologyRepository) => {
				return new TechnologyDetachedService(technologyRepository)
			},
			inject: ["TechnologyRepository"],
		},
	],
})
export class TechnologyModule {}
