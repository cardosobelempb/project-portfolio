import Header from "@/components/shared/header"

type ProjectProps = {
	params: Promise<{ id: string }>
}

export default async function Project({ params }: ProjectProps) {
	const { id } = await params

	return (
		<div>
			<Header />
			<h1>Projeto {id}</h1>
		</div>
	)
}
