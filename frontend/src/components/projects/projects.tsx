import { ProjectProps } from "@core"

import Container from "../shared/container"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import ProjectItem from "./project-item"

export type Props = {
	title: string
	projects: ProjectProps.Props[]
}

export default function Projects({ title, projects }: Props) {
	return (
		<Container className="flex flex-col sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-white/30">{title}</h3>
			<Carousel opts={{ align: "center", loop: true }} className="w-full">
				<CarouselContent className="flex gap-3">
					{projects.map((project) => (
						<CarouselItem
							key={project.id}
							className="sm:basis md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
							<ProjectItem project={project} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Container>
	)
}
