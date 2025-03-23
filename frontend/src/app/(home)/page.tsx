import Curriculum from "@/components/curriculum"
import LandingContent from "@/components/landing/landing-content"
import Container from "@/components/shared/container"
import { technologyFindDetachedService } from "@/services/technology/technology-find-detached.service"
import { technologyFindManyService } from "@/services/technology/technology-find-many.service"

export default async function Home() {
	const technologies = await technologyFindManyService()
	if (!technologies) return null

	const technologyDetached = await technologyFindDetachedService()
	if (!technologyDetached) return null

	return (
		<>
			<LandingContent technologies={technologyDetached} />
			<Container className="py-16">
				<Curriculum technologies={technologies} />
			</Container>
		</>
	)
}
