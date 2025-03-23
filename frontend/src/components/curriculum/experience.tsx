type Props = {
	primary: string
	secondary: string
}

export default function Experience() {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col  items-center justify-around border border-zinc-800 rounded-lg p-6">
			<ExperienceItem primary="+150" secondary="países atendidos" />
			<ExperienceItem primary="+20" secondary="anos de experiência" />
			<ExperienceItem primary="420k" secondary="alunos matrículados" />
		</div>
	)
}

function ExperienceItem({ primary, secondary }: Props) {
	return (
		<div className="flex flex-col items-center gap-3">
			<span className="text-red-500 text-3xl font-bold leading-6">{primary}</span>
			<span className="text-zinc-400 text-sm text-center">{secondary}</span>
		</div>
	)
}
