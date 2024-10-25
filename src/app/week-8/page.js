"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealComponent from "./meal-ideas"; // 將 MealIdeas 改為 MealComponent
import { useState } from "react";

const removeEmoji = (text) => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
};

export default function Page() {
    // 設定初始項數據
    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState("");

    // 添加新項的處理函數
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    // 處理項目選擇的函數
    const handleItemSelect = (item) => {
        const cleanedItemName = removeEmoji(item.name.split(",")[0].trim());
        setSelectedItem(cleanedItemName);
    }; // 這裡需要結束 handleItemSelect 函數的括號

    return (
        <div className="bg-teal-900 w-full h-screen">
            <main className="bg-emerald-900 flex"> {/* 添加 flex 以排佈元件 */}
                {/* 將 NewItem 和 ItemList 組件放在一側 */}
                <section className="flex flex-col w-1/2">
                    <div className="flex justify-center">
                        <NewItem onAddItem={handleAddItem} />
                    </div>
                    <div className="flex justify-center">
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                </section>

                {/* MealComponent 放在另一側 */}
                <section className="w-1/2">
                    <MealComponent ingredient={selectedItem} />
                </section>
            </main>

            {/* 返回首頁的鏈接 */}
            <section className="ml-5 text-green-400 font-bold flex justify-center">
                Go back to <Link href={"/"} className="ml-1">HomePage</Link>
            </section>
        </div>
    );
}