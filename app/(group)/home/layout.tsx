import type { ReactNode } from "react";

interface LayoutProps {
	collection: ReactNode;
	params: {
		locationid: string;
	};
}

export default async function Layout({
	collection,
}: LayoutProps) {
	return (
		<div className="min-h-screen">
			{collection}
		</div>
	);
}
