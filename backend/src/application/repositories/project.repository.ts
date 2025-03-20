import { ProjectProps } from "@core"
import { PrismaService } from "src/shared/infrastructure/database/prisma.service"

export class ProjectRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async findById(id: string): Promise<ProjectProps.Props | null> {
		const project = await this.prismaService.project.findUnique({
			where: {
				id,
			},
			include: {technologies: {select: {technology: true}}},
		})

		if (!project) {
			return null
		}

		return project as any
	}

	async findMany(): Promise<ProjectProps.Props[]> {
		const projects = await this.prismaService.project.findMany()
		return projects as any
	}
}
