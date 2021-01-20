import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav 
            className='flex justify-between items-center h-16 bg-pink-700 text-white'
            role='navigation'>
            <Link 
                to='/' 
                className='pl-8 font-sans text-2xl my-3.5'>
                    Om Nom
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
                <svg 
                    className='w-8 h-8 my-4'
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                </svg>               
            </div>

            <div className='pr-8 my-5 md:block hidden'>
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/menu'>Menu</Link>
                <Link className='p-4' to='/about'>About</Link>
                <Link className='p-4' to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
