import { useState } from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false)


return ( <nav className="bg-black py-4">
        <div className="container flex justify-between items-center">
            <div className="mr-20">
                <img src="../public/logo-bici.png" alt="BikeMarket logo" />
            </div>
            <div className="flex items-center justify-center flex-grow">
                <img src="" alt="" />
                <form className="bg-white p-2 h-[20%] w-full rounded-lg">
                    <input type="text" />
                </form>
            </div>
            <div className="ml-20 flex items-center justify-end">
                <ul className="flex space-x-4 justify-end items-center">
                    <li>
                        <button className="text-white text-xl" href="" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
                        {showCategories && (
                        <ul className="absolute bg-white text-xl w-[20%]">
                        <li>
                            <button className="hover:underline">
                                <NavLink to="/category/1"> Categoría 1 </NavLink>
                            </button>
                        </li>
                        <li>
                            <button className="hover:underline">
                                <NavLink to="/category/2"> Categoría 2 </NavLink>
                            </button>
                        </li>
                        <li>
                            <button className="hover:underline">
                                <NavLink to="/category/3"> Categoría 3 </NavLink>
                            </button>
                        </li>
                        </ul>)} 
                    </li>
                    <li>
                        <button className="text-white text-xl">
                            <NavLink to="/"> Productos </NavLink>
                        </button>
                        
                    </li>
                    <li>
                        <button className="text-white text-xl">
                            <NavLink to="/contact"> Contacto </NavLink>
                        </button>
                    </li>
                    <li>
                    <CartWidget />
                    </li>
                    
                </ul>
            </div>
        </div>

        </nav>);
}

export default Navbar