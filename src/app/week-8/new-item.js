"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {  // 接收 onAddItem
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            id: Date.now(),  // 为新项生成唯一 ID
            name: name,
            quantity: count,
            category: category,
        };

        onAddItem(item);  // 调用 onAddItem 以添加新项
        console.log(item);
        alert(`Name: ${name}, Quantity: ${count}, Category: ${category}`);
        setName("");
        setCount(1);
        setCategory("Produce");
    };

    const increment = () => setCount(prevCount => Math.min(21, prevCount + 1));
    const decrement = () => setCount(prevCount => Math.max(0, prevCount - 1));

    return (
        <form onSubmit={handleSubmit} className="bg-slate-400 flex flex-col items-center w-80 p-4 mt-4 rounded-2xl">
            {/* 名字输入框 */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // 更新名字
                placeholder="Items Name"
                className="mb-4 p-2 border border-gray-300 rounded-lg"
            />
            {/* 类别选择框和数量控制按钮 */}
            <div className="flex items-center justify-between w-full mb-4">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} // 更新类别
                    className="p-2 border border-gray-300 rounded-lg flex-grow"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Others">Others</option>
                </select>
                <div className="flex items-center w-32 ml-4">
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={count <= 0}
                        className={`w-12 rounded-lg ${count <= 0 ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-200 active:bg-orange-700"}`}
                    >
                        -
                    </button>
                    <div className="mx-2 text-center">
                        {count >= 21 ? "💀" : count <= 0 ? "🐣" : count}
                    </div>
                    <button
                        type="button"
                        onClick={increment}
                        disabled={count >= 21}
                        className={`w-12 rounded-lg ${count >= 20 ? "bg-gray-400" : "bg-lime-500 hover:bg-lime-200 active:bg-lime-700"}`}
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
}
