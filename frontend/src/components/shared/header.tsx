import Image from "next/image"
import Link from "next/link"
import Container from "./container"

export default function Header() {
	return (
		<header className="flex items-center h-16 justify-between py-4">
			<Container>
				<div>
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.svg" alt="Logo" width={80} height={0} />
					</Link>
				</div>
			</Container>
		</header>
	)
}
