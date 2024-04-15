import { CartContext } from "../context/CartContext";
import { useContext,useState } from "react";


const Cart = ()=>{
    const {cart,setCart, finalPrice, setFinalPrice} = useContext(CartContext);
    const [amount, setAmount] = useState (1)
    
    const handleAdd = (item) => {
    setAmount (amount+1)
    }

    const handleRest = (item) => {
        amount>1 && setAmount (amount-1)
}


    return(
        <div className="max-w-7xl mx-auto py-10">
            <table className="w-full ">
                <thead>
                    <tr className="grid grid-cols-4">
                        <th className="col-span-2">Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length>0 && 
                    cart.map((prod)=>{
                        return (
                            <tr key={prod.id} className="grid items-center grid-cols-4 border-t">
                                <th className="col-span-2 flex items-center">
                                    <div className="h-32 w-32">
                                        <img className="w-full h-full object-cover" src={prod.imagen} alt={prod.nombre} />
                                    </div>
                                    <p>
                                        {prod.nombre}
                                    </p>
                                </th>
                                <th>
                                    <div className="flex items-center gap-4 mx-auto">
                                        <span onClick={handleRest(prod)} className="w-10 h-10 rounded bg-red-500 text-white text-lg">
                                            -
                                        </span>
                                        <span>
                                            {prod.stock}
                                        </span>
                                        <span onClick={handleAdd(prod)} className="w-10 h-10 rounded bg-red-500 text-white text-lg">
                                            +
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <p>
                                        ${prod.precio}
                                    </p>
                                </th>
                            </tr>
                        )
                    })}
                    <tr className="grid grid-cols-2 border-t pt-8">
                        <th>
                            <p>
                                Precio Final
                            </p>
                        </th>
                        <th>
                            <p>
                                ${finalPrice}
                            </p>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart;