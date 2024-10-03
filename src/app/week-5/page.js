import Link from "next/link"
import NewItem from "./new-item"

export default function Page(){
    return(
        <div className="bg-teal-900 w-full h-screen">
            <main>
                <section className="flex justify-center">
                    <NewItem></NewItem>
                </section>
                <section className="ml-5 text-green-400 font-bold flex justify-center">
                    Go back to<Link href={"/"} className="ml-1">HomePage</Link>
                </section>
            </main>
        </div>
        );
    }
    