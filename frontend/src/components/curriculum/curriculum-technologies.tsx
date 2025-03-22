import { TechnologyProps } from "@core"

export type CurriculumProps = {
	technologies: TechnologyProps.Props[]
}

export default function CurriculumTechnologies({ technologies }: CurriculumProps) {
	return technologies ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 gap-x-3 bg-black border border-zinc-800 rounded">
			<div className="flex flex-wrap justify-center items-center ">
				{technologies.map((technology) => (
					<div key={technology.id} className="">
						<span className="text-red-500 font-bold">#</span>
						<span>{technology.name}</span>
					</div>
				))}
			</div>
		</div>
	) : null
}
