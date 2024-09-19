export default function Item({name, quantity, category}) {
    return( 
        <section className="mb-3 bg-teal-500 w-60">
            <div className="ml-3">
                <h3 className="font-bold text-l">{name}</h3>
                <p>Buy {quantity} from {category}</p>
            </div>
        </section>
    );
}