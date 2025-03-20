import { TechnologyProps } from "@core"
import { NotFoundException } from "@nestjs/common"
import { TechnologyRepository } from "src/application/repositories/technology.repository"

export class TechnologyFindByIdService {
	constructor(private readonly technologyRepository: TechnologyRepository) {}

	async execute(technologyId: string): Promise<TechnologyProps.Props | null> {
		const technology = await this.technologyRepository.findById(technologyId)

		if (!technology) {
			throw new NotFoundException()
		}

		return technology
	}
}
