import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
    const category = useParams().id;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productosRef = collection (db, "productos");
        getDocs (productosRef)
            .then ((resp)=>{
                setProducts (
                    resp.docs.map((doc)=>{
                        return { ...doc.data(),id: doc.id}
                    })
                )
            })


    }, []);


    const getProductosByCategory = (catId) => {
        if (catId) {
            return products.filter((product) => product.categoria === parseInt(catId))
        } else {
            return products
        }
    }

    const productsPorCategoria = getProductosByCategory(category)

    return (<>
        <div className= " py-14 grid gap-4 grid-cols-3 max-w-7xl mx-auto">
            {
                productsPorCategoria && (
                    productsPorCategoria.map((producto) => {
                        return (
                            <Link className="border rounded" key={producto.id} to={`/item/${producto.id}`}>
                                <div className="max-w-sm">
                                    <img src={producto.imagen} alt="producto.nombre" />
                                </div>
                                <div className="p-4 flex flex-col justify-between item-center">
                                    <h2 className="text-xl">{producto.nombre}</h2>
                                    <h3>{producto.descripcion}</h3>
                                    <p className="text-lg font-semibold">${producto.precio}</p>
                                    {producto.isOnDiscount && <span className="text-red-500 font-semibold">Producto con descuento</span>}
                                </div>

                            </Link>)
                    })
                )}</div>

    </>)

}
    export default ItemListContainer;