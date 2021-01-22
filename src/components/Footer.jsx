import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center items-center h-16 bg-red text-white font-comfortaa text-xs">
            <p>Copyright ©{new Date().getUTCFullYear()} Baby Belly All rights reserved.</p>
        </div>
    )
}

export default Footer
