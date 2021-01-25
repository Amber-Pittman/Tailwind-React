import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div 
            className={
                isOpen ? 'grid grid-rows-4 text-center items-center bg-red text-white font-semibold' : 'hidden'}
                
                onClick={toggle}>
            <Link className='links-extra' to='/'>Home</Link>
            <Link className='links-extra border-white' to='/shop'>Shop</Link>
            <Link className='links-extra' to='/about'>About</Link>
            <Link className='links-extra' to='/contact'>Contact</Link>
        </div>
    )
}

export default Dropdown
