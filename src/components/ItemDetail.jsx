import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {
    console.log(item);


    const handleAdd = () => {
        console.log('agregar al carrito')
    }

    return (<>
        <div className="mx-auto my-auto">
            <div className="border rounded" key={item.id}>
                <div className="max-w-sm">
                    <img src={item.imagen} alt="item.nombre" />
                </div>
                <div className="p-4 flex flex-col justify-between item-center">
                    <h2 className="text-xl">{item.nombre}</h2>
                    <h3>{item.descripcion}</h3>
                    <p className="text-lg font-semibold">${item.precio}</p>
                    {item.isOnDiscount && <span className="text-red-500 font-semibold">item con descuento</span>}
                </div>

            </div>
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
        </div>
    </>);

}