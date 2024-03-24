import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productos from '../utils/MockAsync.json';
import { fakeApiCall } from "../utils/fakeApiCall";

const ItemListContainer = () => {
    const category = useParams().id;
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);

        fakeApiCall(productos)
            .then(res => {
                setProducts(res.productos);
                console.log(res);
                setLoading(false);
                console.log(products);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <h1>Cargando...</h1>


    const getProductosByCategory = (catId) => {
        if (catId) {
            return products.filter((product) => product.categoria === parseInt(catId))
        } else {
            return products
        }
    }

    const productsPorCategoria = getProductosByCategory(category)

    return (<>
        <div className= "grid gap-4 grid-cols-3 max-w-7xl mx-auto">
            {
                productsPorCategoria && (
                    productsPorCategoria.map((producto) => {
                        console.log(producto)
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