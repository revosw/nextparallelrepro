import { getD } from "@/app/api/api";
import { ClientComponent } from "./ClientComponent";

export default async function D() {
    const res = await getD()

    return (
        <div className="flex flex-col gap-2">
            <p>{res}</p>
            <ClientComponent />
        </div>
    )
}