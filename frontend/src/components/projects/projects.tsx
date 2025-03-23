import { ProjectProps } from "@core"

import Container from "../shared/container"
import ProjectItem from "./project-item"

export type Props = {
	title: string
	projects: ProjectProps.Props[]
}

export default function Projects({ title, projects }: Props) {
	return (
		<Container className="flex flex-col justify-center gap-5 w-full">
			<h3 className="text-2xl font-bold text-white/30">{title}</h3>
			<div className="flex gap-4 flex-wrap">
				{projects.map((project) => (
					<ProjectItem key={project.id} project={project} />
				))}
			</div>
		</Container>
	)
}
