import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isAtTop ? 'transparent' : 'opaque'}`}>
            <style>
                {`
                    .header {
                        position: fixed;
                        width: 100%;
                        z-index: 100;
                        transition: background-color 0.8s ease, opacity 0.8s ease;
                    }
                    .header.transparent {
                        background-color: rgba(0, 0, 0, 0);
                        opacity: 1;
                        color: rgb(190, 183, 183);
                    }
                    .header.opaque {
                        background-color: rgba(0, 0, 0, 0.6);
                        opacity: 1;
                        color : white;
                    }
                    .header .container {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                        padding: 1rem;
                        // color: white;
                    }
                `}
            </style>
            <div className="container mx-auto">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-white text-xl">ImperiaFood</span>
                </a>
                <button className="inline-flex text-black items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">card
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/">
                    <p className="mr-5 hover:text-gray-400">Home</p>
                    </Link>
                    <Link to="/admin">
                    <p className="mr-5 hover:text-gray-400">Admin</p>
                    </Link>
                    <Link to="/contact">
                    <p className="mr-5 hover:text-gray-400">Contact</p>
                    </Link>
                    <Link to="/category">
                    <p className="mr-5 hover:text-gray-400">Catalog</p>
                    </Link>
                    <Link to="/products">
                    <p className="mr-5 hover:text-gray-400">Products</p>
                    </Link>
                    <Link to="/ingredients">
                    <p className="mr-5 hover:text-gray-400">Ingredients</p>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
