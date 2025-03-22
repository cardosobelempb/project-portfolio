import Header from "../shared/header"

export default function LandingContent() {
	return (
		<div className="flex flex-col bg-[url('/principal.jpg')] h-[500px] bg-cover bg-center">
			<Header />
			<div className="flex flex-col items-center justify-center h-full text-white">
				<h1 className="flex gap-3 items-center">
					<span className="w-2 h-2 bg-red-500 rounded-full"></span>
					<span className="text-3xl sm:text-5xl font-bold text-center">
						Cláudio Cadoso
					</span>
					<span className="w-2 h-2 bg-red-500 rounded-full"></span>
				</h1>
				<h2 className="text-zinc-500">CTO da SURB Serviços Urbano</h2>
			</div>
		</div>
	)
}
