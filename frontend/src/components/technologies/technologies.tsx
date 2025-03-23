import { TechnologyProps } from "@core"
import Image from "next/image"

export type TechnologiesProps = {
	technologies: TechnologyProps.Props[]
}

export function Technologies({ technologies }: TechnologiesProps) {
	return technologies ? (
		<div className="flex justify-center gap-4 flex-wrap">
			{technologies.map((technology) => (
				<div key={technology.id} className="flex flex-col items-center gap-1">
					<span className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden">
						<Image
							alt={technology.name}
							src={technology.imgUri}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-[10px] text-zinc-400">{technology.name}</span>
				</div>
			))}
		</div>
	) : null
}
