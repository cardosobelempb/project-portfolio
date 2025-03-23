import { TechnologyProps } from "@core"
import CurriculumTechnologies from "./curriculum-technologies"
import Experience from "./experience"

export type CurriculumProps = {
	technologies: TechnologyProps.Props[]
}

export default function Curriculum({ technologies }: CurriculumProps) {
	return (
		<div className="flex flex-col lg:flex-row gap-6 min-h-72 w-full">
			<div className="flex-1">test</div>
			<Experience />
			<CurriculumTechnologies technologies={technologies} />
		</div>
	)
}
