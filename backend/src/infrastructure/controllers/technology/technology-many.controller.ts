import { TechnologyProps } from "@core"
import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common"
import { TechnologyManyService } from "src/application/services/technology/technology-many.service"

@Controller("technologies")
export class TechnologyManyController {
	constructor(private readonly technologyManyService: TechnologyManyService) {}

	@HttpCode(HttpStatus.OK)
	@Get()
	async handle(): Promise<TechnologyProps.Props[]> {
		const technologies = await this.technologyManyService.execute()
		return technologies
	}
}
