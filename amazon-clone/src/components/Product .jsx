import React from 'react'
import './Product.css'

const Product  = ({ title, price, image, rating}) => {
  return (
    <div className='product'>
        <div className="product__info">

          <p className="product__title">
            {title}
          </p>
        
          <p className="product__price">
              <small >$</small>
              <strong>{price}</strong>
          </p>

          <div className='product__rating'>
              {Array(rating).fill().map( _ => <p>⭐</p>)}
          </div>

        </div>
            <img src={image} className='product__image'/>
            <button>Add to cart</button>
        
    </div>
  )
}

export default Product 
