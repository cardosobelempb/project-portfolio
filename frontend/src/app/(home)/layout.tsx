import ChatButton from "@/components/chat/chat-button"

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<ChatButton />
			{children}
		</>
	)
}
