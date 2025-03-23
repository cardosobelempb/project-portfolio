import { ProjectProps } from "@core"
import Image from "next/image"
import Link from "next/link"

export type Props = {
	project: ProjectProps.Props
}

export default function ProjectItem({ project }: Props) {
	if (!project.imgUri) return null

	return (
		<Link href={`/project/${project.id}`}>
			<div className="min-w-64 min-h-64 relative rounded-xs overflow-hidden border border-zinc-800">
				<Image src={project.imgUri[0]} alt={project.name} fill objectFit="object-cover" />
			</div>
		</Link>
	)
}
