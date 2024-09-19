export default function Dog({ name, breed, age, color }) {
    return( 
        <section className="m-2 bg-slate-300">
            <h3 className="text-lg font-bold text-orange-500">Name:{name}</h3>
            <p>Breed:{breed}</p>
            <p>Age:{age}</p>
            <p>Color:{color}</p>
        </section>
    );
}