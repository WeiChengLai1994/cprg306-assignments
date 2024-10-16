"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function Page() {
    // 设置初始项数据
    const [items, setItems] = useState(itemData);
    
    // 添加新项的处理函数
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div className="bg-teal-900 w-full h-screen">
            <main className="bg-emerald-900">
                {/* 将 NewItem 组件放在页面顶部 */}
                <section className="flex justify-center">
                    <NewItem onAddItem={handleAddItem} /> {/* 传递处理函数 */}
                </section>
                {/* 显示项目列表 */}
                <section className="flex justify-center">
                    <ItemList items={items} /> {/* 显示项列表 */}
                </section>
                
                {/* 返回首页的链接 */}
                <section className="ml-5 text-green-400 font-bold flex justify-center">
                    Go back to <Link href={"/"} className="ml-1">HomePage</Link>
                </section>
            </main>
        </div>
    );
}
