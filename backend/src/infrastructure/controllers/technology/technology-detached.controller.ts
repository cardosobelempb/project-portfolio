import { ProjectProps } from "@core"
import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common"
import { TechnologyDetachedService } from "src/application/services/technology/technology-detached.service"

@Controller("detached")
export class TechnologyDetachedController {
	constructor(private readonly technologyDetachedService: TechnologyDetachedService) {}

	@HttpCode(HttpStatus.OK)
	@Get()
	async handle(): Promise<ProjectProps.Props[]> {
		console.log("TechnologyDetachedController")
		const projects = await this.technologyDetachedService.execute()
		return projects as any
	}
}
