
"use client";

import {useState} from "react";




export default function NewItem(){
    const [count, setCount] = useState(1);
    const increment = () => setCount (prevCount => Math.min(21,prevCount+1));
    const decrement = () => setCount (prevCount => Math.max(0,prevCount-1));


    return ( 
        <div className="bg-slate-400 flex justify-between items-center w-48 p-2 mt-4 rounded-2xl">
            <div className="text-left m-2">
                {count >= 21 ? "💀" : count <= 0 ? "🐣" : count }
            </div>
            <div className="flex space-x-2">
                <button onClick={increment} disabled={count>=21} className={`${count >= 20 ? "bg-gray-400" : "bg-lime-500 hover:bg-lime-200 active:bg-lime-700"} w-12 rounded-lg`}>
                +
                </button>
                <button onClick={decrement} disabled={count<=0} className={`${count <= 0 ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-200 active:bg-orange-700"} w-12 rounded-lg`}>
                -
                </button>
            </div>     
        </div>
    );
}