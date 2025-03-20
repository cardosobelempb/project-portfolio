import { ProjectProps } from "@core"
import { Injectable } from "@nestjs/common"
import { ProjectRepository } from "src/application/repositories/project.repository"

@Injectable()
export class ProjectManyService {
	constructor(private readonly projectRepository: ProjectRepository) {}

	async execute(): Promise<ProjectProps.Props[]> {
		const technologies = await this.projectRepository.findMany()
		return technologies
	}
}
