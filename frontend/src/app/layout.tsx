import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
	variable: "--font-montserrat-sans",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portfolio projetos de desenvolvimento web",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${montserrat.className} antialiased`}>{children}</body>
		</html>
	)
}
