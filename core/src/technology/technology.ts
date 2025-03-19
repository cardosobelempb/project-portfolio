import { ProjectProps } from "../project/project"

export namespace TechnologyProps {
	export interface Props {
		id: string
		name: string
		description: string
		imgUri: string
		isActive: boolean
		isDetached: boolean
		createdAt: Date
		updatedAt?: Date | null
		deletedAt?: Date | null
		projects?: ProjectProps.Props[]
	}
}
