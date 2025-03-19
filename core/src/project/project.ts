import { TechnologyProps } from "../technology/technology"
import { LevelProps } from "./level"
import { TypeProps } from "./type"

export namespace ProjectProps {
	export interface Props {
		id: string
		name: string
		description: string
		images: string[]
		level: LevelProps.Props
		type: TypeProps.Props
		repository: string
		isActive: boolean
		isDetached: boolean
		createdAt: Date
		updatedAt?: Date | null
		deletedAt?: Date | null
		technologies: TechnologyProps.Props[]
	}
}
