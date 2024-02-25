import { Suspense } from "react";
import Movies from "./Movies";

export default async function Page() {
    return (
        <main style={{padding: 20}}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Movies />
            </Suspense>
        </main>
    )
}