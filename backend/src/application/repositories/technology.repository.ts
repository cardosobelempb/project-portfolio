import { TechnologyProps } from "@core"
import { PrismaService } from "src/shared/infrastructure/database/prisma.service"

export class TechnologyRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async findById(id: string): Promise<TechnologyProps.Props | null> {
		const technology = await this.prismaService.technology.findUnique({
			where: {
				id,
			},
		})

		if (!technology) {
			return null
		}

		return technology
	}

	async findByDetached(): Promise<TechnologyProps.Props[]> {
		const technology = await this.prismaService.technology.findMany({
			where: {
				isDetached: true,
			},
		})

		if (!technology) {
			return null
		}

		return technology
	}

	async findMany(): Promise<TechnologyProps.Props[]> {
		const technologies = await this.prismaService.technology.findMany()
		return technologies
	}
}
