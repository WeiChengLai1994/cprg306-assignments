import { db } from "../_utils/firebase";

import {
    collection,
    addDoc,
    getDoc,
    onSnapshot,
    query,
    doc,
    where,
  } from "firebase/firestore";
  



export const getItem = async (id) => {
    try {
        const docRef = doc(db, "shopping-list", id);
        const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                console.log("No such item!");
            }
        } catch (e) {
            console.error("Error in getItem", e);
        }
    };

export const addItem = async (userId, item) => {
    try{
        if(!item || item.name){
            throw new Error("Item name is required");
        }
        if(!userId){
            throw new Error("User ID is required");
        }

        const itemCollection = collection(db, "shopping-list");
        const itemRef = await addItem(itemCollection, item);
        return itemRef.id;
    }   catch (e) {
        console.error("Error in addItem", e);
    };
}