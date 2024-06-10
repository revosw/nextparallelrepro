import { getB } from "@/app/api/api";
import { ClientComponent } from "./ClientComponent";

export default async function B() {
    const res = await getB()

    return (
        <div className="flex flex-col gap-2">
            <p>{res}</p>
            <ClientComponent />
        </div>
    )
}