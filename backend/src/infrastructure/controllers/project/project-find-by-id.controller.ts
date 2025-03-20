import { ProjectProps } from "@core"
import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common"
import { ProjectFindByIdService } from "src/application/services/project/project-find-by-id.service"

@Controller("projects")
export class ProjectFindByIdController {
	constructor(private readonly projectFindByIdService: ProjectFindByIdService) {}

	@HttpCode(HttpStatus.OK)
	@Get(":projectId")
	async handle(
		@Param("projectId")
		projectId: string,
	): Promise<ProjectProps.Props> {
		const project = await this.projectFindByIdService.execute(projectId)

		if (!project) {
			return null
		}

		return project
	}
}
