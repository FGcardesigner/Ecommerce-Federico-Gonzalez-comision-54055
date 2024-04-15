import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
    const {cart, setCart, setFinalPrice} = useContext (CartContext)
    const [amount, setAmount] = useState (1)

const handleAddItem = () => {
    const itemInCart = cart.find (prod => prod.nombre === item.nombre);
    if (!itemInCart){
        setCart (prevCart =>[...prevCart, {...item, stock:amount}]);
    }
    else {
        setCart(prevCart=> prevCart.map (prod=> prod.id === itemInCart.id && (amount+prod.stock<=item.stock) ?{...prod, stock:prod.stock+amount}:prod));
    }
    setFinalPrice((prevFinalPrice) => (item.isOnDiscount ? prevFinalPrice + item.precioDescuento : prevFinalPrice + item.precio));
}
useEffect (()=>{
    console.log (cart);

},[cart])


    const handleAdd = () => {
        item.stock>amount && setAmount (amount+1)
    }

    const handleRest = () => {
        amount>1 && setAmount (amount-1)
}

    return (<>
        <div className="mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            <div className="border rounded" key={item.id}>
                <div className="">
                    <img className="w-full h-full object-cover" src={item.imagen} alt="item.nombre" />
                </div>
            </div>
            <div className="p-4 flex flex-col item-center gap-6">
                <h2 className="text-3xl font-semibold ">{item.nombre}</h2>
                <h3>{item.descripcion}</h3>
                <p className="text-2xl font-semibold">${item.precio}</p>
                {item.isOnDiscount && <span className="text-red-500 font-semibold">item con descuento</span>}
                    <div className='rounded border flex gap-3 w-fit'>
                        <button onClick={handleRest} className='font-bold cursor-pointer p-2'>-</button><span className='my-auto'>{amount}</span><button onClick={handleAdd} className='font-bold cursor-pointer p-2'>+</button>
                    </div>
                    <button onClick={handleAddItem} className="rounded p-2 text-xl bg-red-500 text-white w-fit">
                        Agregar al carrito
                    </button>
            </div>
        </div>
    </>);

}