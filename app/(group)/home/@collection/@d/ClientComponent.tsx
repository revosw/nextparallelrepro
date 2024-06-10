"use client"
import { Spinner } from "@/app/Spinner"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export function ClientComponent() {
    console.log("Rendering Client D")
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    function onClick() {
        const searchParams = new URLSearchParams(location.search)
        const currentA = searchParams.get("a") ?? "0"
        searchParams.set("a", (Number(currentA) + 1).toString())
        
        startTransition(() => {
            router.push(`?${searchParams}`)
        })
    }

    if (isPending) {
        return <Spinner />
    }

    return (
        <button type="button" onClick={onClick} className="bg-neutral-800 mix-blend-multiply rounded-xl w-full px-2 py-1">push route</button>
    )
}