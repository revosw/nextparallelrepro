import { getA, getB } from "@/app/api/api";
import { ClientComponent } from "./ClientComponent";

export default async function A() {
    const res = await getA()

    return (
        <div className="flex flex-col gap-2">
            <p>{res}</p>
            <ClientComponent />
        </div>
    )
}