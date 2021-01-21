import React from 'react'
import image1 from '../images/baby-bun-twins.jpg'
import image2 from '../images/frilly-butt.jpg'
import image3 from '../images/winter-baby.jpg'

const Content = () => {
    return (
        <>
            <div className='product-card'>
                <img src={image1} alt="twins wearing white hats with bunny ears pointing up" className="product-img"/>
                <div className="product-card-text">
                    <h2 className='product-h2'>
                        Bunny Hats
                    </h2>
                    <p className="product-p">
                        Ultra soft and extra sweet for your little one
                    </p>
                    <span>$36.00</span>
                </div>
            </div>
            
            <div className='product-card'>
                <img src={image2} alt="infant playing with window seat while wearing pastel pink frilly diaper cover" className="product-img"/>
                <div className="product-card-text">
                    <h2 className='product-h2'>
                        Frilly Pink Diaper Cover
                    </h2>
                    <p className="product-p">
                        Pink diaper cover with oodles of lacey frills
                    </p>
                    <span>$12.00</span>
                </div>
            </div>

            <div className='product-card'>
                <img src={image3} alt="full-cheeked toddler wearing red headband, white hooded cape with faux fur trim and decorative rosette, with black and white plaid leggings" className="product-img"/>
                <div className="product-card-text">
                    <h2 className='product-h2'>
                        4-Piece Winter Baby Outfit
                    </h2>
                    <p className="product-p">
                        Make your star shine! This outfit includes a red headband, a white fleece hooded cape with faux fur trim, with black and white plaid leggings to complete the look.
                    </p>
                    <span>$12.00</span>
                </div>
            </div>
        </>
    )
}

export default Content