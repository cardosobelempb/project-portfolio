export namespace ProjectProps {
	export interface Props {
		id: string
		name: string
		description: string
		imgUri: string[]
		level: number
		type: string
		repository: string
		isActive: boolean
		isDetached: boolean
		createdAt: Date
		updatedAt?: Date | null
		deletedAt?: Date | null
	}
}
