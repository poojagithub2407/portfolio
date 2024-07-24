import { useState } from 'react';
import profile from '../../public/image/PoojaDayal.jpg';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
    const navItems = [
        { id: 1, item: "Home" },
        { id: 2, item: "About" },
        { id: 3, item: "Experience" },
        { id: 4, item: "Contact" },
    ];

    const [menu, setMenu] = useState(false);

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
            <div className='flex justify-between items-center h-16'>
                <div className="flex space-x-2">
                    <div>
                        <img
                            src={profile}
                            className="h-12 w-12 rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl cursor-pointer'>Pooja</h1>
                        <p className='text-sm'>Web application Developer</p>
                    </div>
                </div>
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {navItems.map((navItem) => (
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={navItem.id}>
                                <Link
                                    to={navItem.item}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                >
                                    {navItem.item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='md:hidden' onClick={() => setMenu(!menu)}>
                        {menu ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
                    </div>
                </div>
            </div>
            {menu && (
                <div className='bg-white'>
                    <ul className='md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl'>
                        {navItems.map((navItem) => (
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={navItem.id}>
                                <Link
                                    to={navItem.item}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    onClick={() => setMenu(false)} // Close the menu when an item is clicked
                                >
                                    {navItem.item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
