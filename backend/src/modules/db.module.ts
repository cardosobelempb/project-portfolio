import { Module } from "@nestjs/common"
import { ProjectRepository } from "src/application/repositories/project.repository"
import { TechnologyRepository } from "src/application/repositories/technology.repository"
import { PrismaService } from "src/shared/infrastructure/database/prisma.service"

@Module({
	providers: [
		PrismaService,
		{
			provide: "PrismaService",
			useClass: PrismaService,
		},
		{
			provide: "TechnologyRepository",
			useClass: TechnologyRepository,
		},
		{
			provide: "ProjectRepository",
			useClass: ProjectRepository,
		},
		{
			provide: "TechnologyRepository",
			useFactory: (prismaService: PrismaService) => {
				return new TechnologyRepository(prismaService)
			},
			inject: ["PrismaService"],
		},
		{
			provide: "ProjectRepository",
			useFactory: (prismaService: PrismaService) => {
				return new ProjectRepository(prismaService)
			},
			inject: ["PrismaService"],
		},
	],
	exports: [
		PrismaService,
		{
			provide: "PrismaService",
			useClass: PrismaService,
		},
		{
			provide: "TechnologyRepository",
			useClass: TechnologyRepository,
		},
		{
			provide: "ProjectRepository",
			useClass: ProjectRepository,
		},
		{
			provide: "TechnologyRepository",
			useFactory: (prismaService: PrismaService) => {
				return new TechnologyRepository(prismaService)
			},
			inject: ["PrismaService"],
		},
		{
			provide: "ProjectRepository",
			useFactory: (prismaService: PrismaService) => {
				return new ProjectRepository(prismaService)
			},
			inject: ["PrismaService"],
		},
	],
})
export class DbModule {}
