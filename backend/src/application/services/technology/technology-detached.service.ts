import { TechnologyProps } from "@core"
import { TechnologyRepository } from "src/application/repositories/technology.repository"

export class TechnologyDetachedService {
	constructor(private readonly technologyRepository: TechnologyRepository) {}

	async execute(): Promise<TechnologyProps.Props[]> {
		const technologies = await this.technologyRepository.findByDetached()
		return technologies
	}
}
