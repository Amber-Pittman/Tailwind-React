import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center items-center h-20 bg-red text-white font-comfortaa text-sm text-center">
            <p>Copyright ©2003-{new Date().getUTCFullYear()} Baby Belly<br/> All rights reserved.</p>
        </div>
    )
}

export default Footer
