import { useEffect, useState } from "react";
import products from "../utils/MockAsync.json";
import { ItemDetail } from "./ItemDetail";
import { fakeApiCall } from "../utils/fakeApiCall";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productsCharged, setProductsCharged] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [filteredProduct, setFilteredProduct] = useState(null);

    useEffect(() => {
        setLoading(true);
        fakeApiCall(products)
            .then(resp => {
                setProductsCharged(resp.productos);
                const filteredProd = resp.productos.find(product => product.id == id);
                setFilteredProduct(filteredProd);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            {filteredProduct && <ItemDetail item={filteredProduct} />}
        </div>
    );
}

export default ItemDetailContainer;