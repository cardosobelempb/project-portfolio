import { TechnologyProps } from "@core"
import CurriculumTechnologies from "./curriculum-technologies"

export type CurriculumProps = {
	technologies: TechnologyProps.Props[]
}

export default function Curriculum({ technologies }: CurriculumProps) {
	return (
		<div>
			<CurriculumTechnologies technologies={technologies} />
		</div>
	)
}
