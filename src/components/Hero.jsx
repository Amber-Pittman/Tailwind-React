import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-white h-screen flex flex-col justify-center items-center'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-red font-black mb-14 text-aqua font-montez'>
                Baby Belly
            </h1>
            <Link 
                className='lg:py-5 lg:px-9 md:py-4 md:px-8 sm:py-3 sm:px-5 py-4 px-6 bg-red rounded-full  hover:bg-red text-white flex items-center font-montserrat lg:text-3xl md:text-2xl sm:text-xl text-base'
                to='/' >
                Buy Now
                <svg 
                    className='lg:w-10 lg:h-10 lg:ml-8 md:w-8 md:h-8 md:ml-6 sm:w-6 sm:h-6 sm:ml-4 w-5 h-5 ml-3 animate-pulse'
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                        />
                </svg>
            </Link>
        </div>
    )
}

export default Hero