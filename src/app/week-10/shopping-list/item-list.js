"use client";  // Add this directive to indicate it's a Client Component

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) { // 接收 items prop
    const [sortBy, setSortBy] = useState("name");

    // Sort the items based on the sortBy state
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "quantity") {
            return a.quantity - b.quantity;
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Function to determine button styles based on the current sortBy value
    const getButtonStyles = (sortType) => {
        return sortBy === sortType
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-black";
    };

    return (
        <main className="ml-4 mt-4">
            <h2 className="mb-5 text-4xl font-bold text-green-200">Shopping List</h2>

            {/* Sort Buttons */}
            <div className="mb-4 space-x-2">
                <button
                    onClick={() => setSortBy("name")}
                    className={`${getButtonStyles("name")} px-4 py-2 rounded-md`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`${getButtonStyles("category")} px-4 py-2 rounded-md`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy("quantity")}
                    className={`${getButtonStyles("quantity")} px-4 py-2 rounded-md`}
                >
                    Sort by Quantity
                </button>
            </div>

            {/* Render the sorted items */}
            <section>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id} // Use item's unique id as the key
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)} // Pass the item to the onItemSelect function   
                    />
                ))}
            </section>
        </main>
    );
}
