import { Suspense } from "react";

export default async function FavoritePage() {
    return (
        <main style={{padding: 20}}>
            <Suspense fallback={<h1>Loading...</h1>}>
            </Suspense>
        </main>
    )
}