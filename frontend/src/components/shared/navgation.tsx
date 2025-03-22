"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavigationItemProps = {
	href: string
	children: React.ReactNode
	selected?: boolean
	target?: boolean
}

export default function Navigation() {
	const path = usePathname()
	return (
		<nav className="flex gap-6">
			<NavigationItem href={"/"} selected={path === "/"}>
				Início
			</NavigationItem>
			<NavigationItem href={"/project/1"} selected={path.startsWith("/project")}>
				Projetos
			</NavigationItem>
			<NavigationItem
				href={"https://api.whatsapp.com/send/?phone=5583999126797&text&type=phone_number"}
				selected={false}
				target={true}
			>
				Contato
			</NavigationItem>
		</nav>
	)
}

function NavigationItem({ href, target, selected, children }: NavigationItemProps) {
	return (
		<Link href={href} passHref target={target ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-sm border-red-600 hover:text-white ${
					selected ? " border-b-4 text-white " : "text-gray-400"
				}`}
			>
				{children}
			</span>
		</Link>
	)
}
