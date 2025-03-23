import Image from "next/image"
import Link from "next/link"

import Container from "./container"
import Navigation from "./navgation"

export default function Header() {
	return (
		<header className="flex items-center h-16 bg-black/50 w-full">
			<Container className="flex flex-1 justify-center sm:justify-between items-center">
				<div className="flex items-center justify-between gap-10">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.svg" alt="Logo" width={80} height={0} />
					</Link>
					<Navigation />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="https://www.linkedin.com/in/cardosobelempb/"
						className="bg-red-500  rounded-full px-7 py-1 text-sm font-bold"
						target="_blank"
					>
						Perfil
					</Link>
				</div>
			</Container>
		</header>
	)
}
