"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemData);
    
    const handleAddItem = (newItem) => {
        setItems((preItems) => [...preItems, newItem]);
    };

    return (
        <div className="bg-teal-900 w-full h-screen">
            <main className="bg-emerald-900">
                {/* 將 NewItem 組件移至頁面頂部 */}
               
                <section className="flex justify-center">
                    <NewItem onAddItem={handleAddItem} />
                </section>
                {/* 顯示項目列表 */}
                <section className="flex justify-center">
                    <ItemList items={items} />
                </section>
                
                {/* 返回首頁的鏈接 */}
                <section className="ml-5 text-green-400 font-bold flex justify-center">
                    Go back to<Link href={"/"} className="ml-1">HomePage</Link>
                </section>
            </main>
        </div>
    );
}
