import { getC } from "@/app/api/api";
import { ClientComponent } from "./ClientComponent";

export default async function C() {
    const res = await getC()

    return (
        <div className="flex flex-col gap-2">
            <p>{res}</p>
            <ClientComponent />
        </div>
    )
}