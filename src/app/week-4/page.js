import Link from "next/link"
import NewItem from "./new-items"

export default function Page() {
    return (
        <div>
            <main className="h-full">
                <section className="flex justify-center">
                    <NewItem />
                </section>
                <section className="text-green-400 font-bold flex justify-center mt-5">
                    Go back to
                    <Link href="/" className="ml-1">HomePage</Link>
                </section>
            </main>
        </div>
    )
}
