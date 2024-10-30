"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealComponent from "./meal-ideas"; // Rename MealIdeas to MealComponent
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context"; // Adjusted path

const removeEmoji = (text) => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
};

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); // Fetch user auth state
    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState("");

    // Function to handle adding a new item
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    // Function to handle item selection
    const handleItemSelect = (item) => {
        const cleanedItemName = removeEmoji(item.name.split(",")[0].trim());
        setSelectedItem(cleanedItemName);
    };

    // Check if the user is not logged in, display a message
    if (!user) {
        return (
            <main>
                <h1>Week 9 Shopping List App</h1>
                <button onClick={gitHubSignIn}>Login with GitHub</button>
                <p>Please log in to see the shopping list</p>
            </main>
        );
    }

    return (
        <div className="bg-teal-900 w-full h-screen">
            <main className="bg-emerald-900 flex"> {/* Add flex for layout */}
                {/* NewItem and ItemList components on one side */}
                <section className="flex flex-col w-1/2">
                    <div className="flex justify-center">
                        <NewItem onAddItem={handleAddItem} />
                    </div>
                    <div className="flex justify-center">
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                </section>

                {/* MealComponent on the other side */}
                <section className="w-1/2">
                    <MealComponent ingredient={selectedItem} />
                </section>
            </main>

            {/* Link back to home */}
            <section className="ml-5 text-green-400 font-bold flex justify-center">
                Go back to <Link href={"/"} className="ml-1">HomePage</Link>
            </section>
        </div>
    );
}
