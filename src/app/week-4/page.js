import Link from "next/link"

import Counter from "./counter"
export default function Page(){
    return(
        <main>
            <section>
                <Counter></Counter>
            </section>
            <section className="ml-5 text-green-800 font-bold">
                Go back to <Link href={"/"}>HomePage</Link>
            </section>
        </main>
    )
}