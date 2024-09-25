
"use client";

import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount (Math.min(20,count+1));
    const decrement = () => setCount (Math.max(1,count-1));


    return ( 
        <div>
            <p>
                Count: {count}
            </p>
            <section>
                <button onClick={increment} className="bg-cyan-600 hover:bg-cyan-200 active:bg-cyan-700 w-32">
                Increment
                </button>
                <button onClick={decrement} className="bg-red-600 hover:bg-red-200 active:bg-red-450 w-32">
                decrement
                </button>
            </section>
            
        </div>
    );
}