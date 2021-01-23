import React from 'react'
import image1 from '../images/winter-baby.jpg'
import image2 from '../images/frilly-butt.jpg'
import image3 from '../images/trolley-boys.jpg'

const Content = () => {
    return (
        <>
            <div className='product-card'>
                <img src={image1} alt='full-cheeked toddler wearing red headband, white hooded cape with faux fur trim and decorative rosette, with black and white plaid leggings' className='product-img'/>
                <div className='product-card-text'>
                    <h2 className='product-h2'>
                        4-Piece Winter Baby Outfit
                    </h2>
                    <p className='product-p'>
                        Make your star shine in this 4-piece ensemble!
                    </p>
                    <span className='price'>$48.00</span>
                </div>
            </div>

            <div className='product-card'>
                <img src={image2} alt='infant playing with window seat while wearing pastel pink frilly diaper cover' className='product-img'/>
                <div className='product-card-text'>
                    <h2 className='product-h2'>
                        Frilly Pink Diaper Cover
                    </h2>
                    <p className='product-p'>
                        Pink diaper cover with oodles of lacey frills
                    </p>
                    <span className='price'>$12.00</span>
                </div>
            </div>
            
            <div className='product-card'>
                <img src={image3} alt='Two small boys wearing khakis, green vests, orange scarves, and fedoras while sitting on the bumper of a yellow and green trolley' className='product-img'/>
                <div className='product-card-text'>
                    <h2 className='product-h2'>
                        Boys' Accessories 2-Piece Starter Pack
                    </h2>
                    <p className='product-p'>
                        Give personality to your kids' uniforms with scarves and fedora 
                    </p>
                    <span className='price'>$25.00</span>
                </div>
            </div>
        </>
    )
}

export default Content