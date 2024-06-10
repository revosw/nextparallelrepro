import { getE } from "@/app/api/api";
import { ClientComponent } from "./ClientComponent";

export default async function E() {
    const res = await getE()

    return (
        <div className="flex flex-col gap-2">
            <p>{res}</p>
            <ClientComponent />
        </div>
    )
}