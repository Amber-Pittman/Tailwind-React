import React from 'react'
import { Link } from 'react-router-dom'

// Destructure in Navbar to use the toggle onClick handler function found in App.js
const Navbar = ({toggle}) => {
    return (
        <nav 
            className='navbar' role='navigation'>
            <Link 
                to='/' 
                className='home-link'>
                    Baby Belly
            </Link>
            <div className='menu-btn' onClick={toggle}>
                <svg 
                    className='menu-icon'
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

            <div className='links'>
                <Link className='links-extra' to='/'>Home</Link>
                <Link className='links-extra' to='/shop'>Shop</Link>
                <Link className='links-extra' to='/about'>About</Link>
                <Link className='links-extra' to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
