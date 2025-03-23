import Curriculum from "@/components/curriculum"
import LandingContent from "@/components/landing/landing-content"
import Projects from "@/components/projects/projects"
import Container from "@/components/shared/container"
import { projectFindManyDetachedService } from "@/services/project/project-find-many-detached.service"
import { projectFindManyJogosService } from "@/services/project/project-find-many-jogos.service"
import { projectFindManyMobileService } from "@/services/project/project-find-many-mobile.service"
import { projectFindManyWebService } from "@/services/project/project-find-many-web.service"
import { projectFindManyService } from "@/services/project/project-find-many.service"
import { technologyFindDetachedService } from "@/services/technology/technology-find-detached.service"
import { technologyFindManyService } from "@/services/technology/technology-find-many.service"

export default async function Home() {
	const technologies = await technologyFindManyService()
	if (!technologies) return null

	const technologyDetached = await technologyFindDetachedService()
	if (!technologyDetached) return null

	const projects = await projectFindManyService()
	if (!projects) return null

	const projectsDetached = await projectFindManyDetachedService()
	if (!projectsDetached) return null

	const projectsMobile = await projectFindManyMobileService()
	if (!projectsMobile) return null

	const projectsWeb = await projectFindManyWebService()
	if (!projectsWeb) return null

	const projectsJogos = await projectFindManyJogosService()
	if (!projectsJogos) return null

	return (
		<>
			<LandingContent technologies={technologyDetached} />
			<Container className="py-16 flex flex-col items-center gap-5">
				<Projects title="Destaques" projects={projectsDetached} />
				<Projects title="Mobile" projects={projectsMobile} />
				<Projects title="Web" projects={projectsWeb} />
				<Projects title="Jogos" projects={projectsJogos} />
				<Curriculum technologies={technologies} />
			</Container>
		</>
	)
}
