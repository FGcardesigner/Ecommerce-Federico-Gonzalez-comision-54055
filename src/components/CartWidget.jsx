import Cart from '../assets/Cart.svg'

const CartWidget = () => {
    return (<><div className='flex relative'>
        <i className="bi bi-cart2 text-white text-2xl"></i>
        <span className='absolute -top-2 -right-2 bg-white w-6 h-6 rounded-full text-center font-semibold'>0</span>
        </div></>);
}

export default CartWidget;