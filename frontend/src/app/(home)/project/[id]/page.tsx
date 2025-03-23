import Container from "@/components/shared/container"
import Header from "@/components/shared/header"

type ProjectProps = {
	params: Promise<{ id: string }>
}

export default async function Project({ params }: ProjectProps) {
	const { id } = await params

	return (
		<Container>
			<Header />
			<h1>Projeto {id}</h1>
		</Container>
	)
}
