import React from 'react'
import { useStateValue } from './stateProvider';

const Checkoutproduct  = ({item}) => {

    const [ {basket}, dispatch ] = useStateValue();
   
    const removeFromBasket = () =>{
        dispatch({
          type:"REMOVE_FROM_BASKET",
          id:item.id
        })
      }

  return (
    <div className='checkout__product'>
                <img className="checkout__product__image" src={item.image}/>
                <div className="checkout__product__info">
                <p className="checkout__product__title">
                  {item.title}
                </p>
                <p className="checkout__product__price">
                  <small >$</small>
                  <strong>{item.price}</strong>
                </p>
                <div className='checkout__product__rating'>
                  {Array(item.rating).fill().map( (_,i )=> <p key={i}>⭐</p>)}
                </div>
                <button onClick = {removeFromBasket} className='checkout__button'>Remove From Cart</button>
                </div> 
            </div>
  )
}

export default Checkoutproduct
