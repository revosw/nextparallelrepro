"use client"

import { ReactNode } from "react";

interface LayoutProps {
	a: ReactNode;
	b: ReactNode;
	c: ReactNode;
	d: ReactNode;
	e: ReactNode;
}

export default function HomeLayout({a, b, c, d, e}: LayoutProps) {
    return (
        <div className="flex gap-4">
            <div className="p-2 rounded-xl bg-red-400">{a}</div>
            <div className="p-2 rounded-xl bg-blue-400">{b}</div>
            <div className="p-2 rounded-xl bg-indigo-400">{c}</div>
            <div className="p-2 rounded-xl bg-green-400">{d}</div>
            <div className="p-2 rounded-xl bg-amber-400">{e}</div>
        </div>
    )
}