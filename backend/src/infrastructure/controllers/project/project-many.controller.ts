import { ProjectProps } from "@core"
import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common"
import { ProjectManyService } from "src/application/services/project/project-many.service"

@Controller("projects")
export class ProjectManyController {
	constructor(private readonly projectManyService: ProjectManyService) {}

	@HttpCode(HttpStatus.OK)
	@Get()
	async handle(): Promise<ProjectProps.Props[]> {
		const technologies = await this.projectManyService.execute()
		return technologies
	}
}
