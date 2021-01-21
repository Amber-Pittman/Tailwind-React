import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav 
            className='flex justify-between items-center h-16 bg-red text-white'
            role='navigation'>
            <Link 
                to='/' 
                className='pl-8 py-3 font-sans lg:text-4xl md:text-3xl sm:text-2xl my-3.5 text-white font-extrabold font-montez'>
                    Baby Belly
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
                <svg 
                    className='w-8 h-8 my-4 text-white'
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

            <div className='pr-8 my-5 md:block text-white hidden font-semibold font-montserrat'>
                <Link className='p-4 hover:underline' to='/'>Home</Link>
                <Link className='p-4 hover:underline' to='/menu'>Menu</Link>
                <Link className='p-4 hover:underline' to='/about'>About</Link>
                <Link className='p-4 hover:underline' to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
