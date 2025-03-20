import { ProjectProps } from "@core"
import { NotFoundException } from "@nestjs/common"
import { ProjectRepository } from "src/application/repositories/project.repository"

export class ProjectFindByIdService {
	constructor(private readonly projectRepository: ProjectRepository) {}

	async execute(projectId: string): Promise<ProjectProps.Props | null> {
		const project = await this.projectRepository.findById(projectId)

		if (!project) {
			throw new NotFoundException()
		}

		return project
	}
}
