import { technologyFindDetachedService } from "@/services/technology/technology-find-detached.service"
import { TechnologyProps } from "@core"
import Header from "../shared/header"
import { Technologies } from "../technologies/technologies"

export type LandingContentProps = {
	technologies: TechnologyProps.Props[]
}

export default async function LandingContent({ technologies }: LandingContentProps) {
	const technologyDetached = await technologyFindDetachedService()
	if (!technologyDetached) return null
	return (
		<div className="flex flex-col bg-[url('/principal.jpg')] h-[500px] bg-cover bg-center gap-y-3 sm:gap-y-5">
			<Header />
			<div className="flex flex-col items-center justify-center h-full text-white gap-y-3 sm:gap-y-5">
				<div className="flex flex-col items-center gap-3">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 bg-red-500 rounded-full"></span>
						<span className="text-2xl md:text-5xl sm:text-5xl  font-bold text-center">
							Cláudio Cadoso
						</span>
						<span className="w-2 h-2 bg-red-500 rounded-full"></span>
					</h1>
					<h2 className="text-zinc-400 text-center text-[10px] sm:text-sm">
						CTO da SURB Serviços Urbano
					</h2>
				</div>
				<Technologies technologies={technologies} />
			</div>
		</div>
	)
}
