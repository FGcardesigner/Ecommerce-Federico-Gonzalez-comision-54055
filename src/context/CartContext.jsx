import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);
    useEffect (()=>{
    },[cart])
    return(
        <>
            <CartContext.Provider value={{
                cart,
                setCart,
                finalPrice,
                setFinalPrice
            }}>
            {children}  </CartContext.Provider>
        </>
    )
} 
