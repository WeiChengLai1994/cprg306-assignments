import Link from "next/link"
import ItemList from "./item-list"
export default function Page(){
    return(
        <main className="bg-cyan-950">
            <section>
                <ItemList>
                </ItemList>
            </section>
            <section className="ml-5 text-green-100 font-bold">
                Go back to <Link href={"/"}>HomePage</Link>
            </section>
        </main>
    )
}