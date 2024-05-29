import React from 'react'
import './Product.css'
import { useStateValue } from './stateProvider'


const Product  = ({ id,title, price, image, rating}) => {

  const [{basket}, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({type: 'ADD_TO_BASKET',item:{
      title,price,image,rating,id
    }} )
  }

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
              {Array(rating).fill().map( (_,i )=> <p key={i}>⭐</p>)}
          </div>

        </div>
            <img src={image} className='product__image'/>
            <button onClick = {addToCart}>Add to cart</button>
        
    </div>
  )
}

export default Product 
