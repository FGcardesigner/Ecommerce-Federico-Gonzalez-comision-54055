import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const [productsCharged, setProductsCharged] = useState([]);
    const { id } = useParams();
    const [filteredProduct, setFilteredProduct] = useState(null);

    useEffect(() => {
        const docRef = doc(db,"productos",id);
        getDoc (docRef)
            .then((resp)=>{
                setFilteredProduct(
                    {...resp.data(),id:resp.id}
                )
            })

    }, [id]);


    return (
        <div className="max-w-7xl mx-auto py-14">
            {filteredProduct && <ItemDetail item={filteredProduct} />}
        </div>
    );
}

export default ItemDetailContainer;