import { TechnologyProps } from "@core"
import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common"
import { TechnologyFindByIdService } from "src/application/services/technology/technology-find-by-id.service"

@Controller("technologies")
export class TechnologyFindByIdController {
	constructor(private readonly technologyFindByIdService: TechnologyFindByIdService) {}

	@HttpCode(HttpStatus.OK)
	@Get(":technologyId")
	async handle(
		@Param("technologyId")
		technologyId: string,
	): Promise<TechnologyProps.Props> {
		const technology = await this.technologyFindByIdService.execute(technologyId)

		if (!technology) {
			return null
		}

		return technology
	}
}
