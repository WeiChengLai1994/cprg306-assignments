import Link from "next/link"
import ItemList from "./item-list";
import NewItem from "../week-4/new-items";

export default function Page(){
    return(
        <div>
            <main className="bg-emerald-900">
              
                <section className="flex justify-center">
                    <ItemList></ItemList>
                </section>
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