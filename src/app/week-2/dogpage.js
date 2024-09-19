import Dog from "./dog";

export default function Page() {
    let dog1 = {
        name: "Buddy",
        breed: "Golden Retriever",
        age: 11,
        color: "brown",
    };
    let dog2 = {
        name: "Kali",
        breed: "Corgi",
        age: 2,
        color: "orange",
    };
    let dog3 = {
        name: "DooDoo",
        breed: "Sausage Dog", // 修正了拼寫錯誤 "Sausage Dog"
        age: 4,
        color: "red",
    };

    return (
        <main className="ml-4 mt-4">
            <h2 className="text-2xl font-bold">Meet the Dogs</h2>
            <Dog name={dog1.name} breed={dog1.breed} age={dog1.age} color={dog1.color} />
            <Dog name={dog2.name} breed={dog2.breed} age={dog2.age} color={dog2.color} />
            <Dog name={dog3.name} breed={dog3.breed} age={dog3.age} color={dog3.color} />
        </main>
    );
}
