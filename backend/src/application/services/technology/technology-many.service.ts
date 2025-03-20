import { TechnologyProps } from "@core"
import { Injectable } from "@nestjs/common"
import { TechnologyRepository } from "src/application/repositories/technology.repository"

@Injectable()
export class TechnologyManyService {
	constructor(private readonly technologyRepository: TechnologyRepository) {}

	async execute(): Promise<TechnologyProps.Props[]> {
		const technologies = await this.technologyRepository.findMany()
		return technologies
	}
}
