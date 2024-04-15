import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <Link to="/cart" className='flex relative'>
                <i className="bi bi-cart2 text-white text-2xl"></i>
                <span className='absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full text-center font-semibold'>{cart.length}</span>
            </Link>
        </>
    );
}

export default CartWidget;