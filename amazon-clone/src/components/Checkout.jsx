import React from 'react'
import add from '../assets/primeday.png'
import './Checkout.css'
import { useStateValue } from './stateProvider'
import Checkoutproduct from './checkoutproduct '

const Checkout = () => {
  const [ {basket}, dispatch ] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout__left">
      <img src={add} alt="add image" className='checkout__ad' />
      <div className="checkout__header">
        {
          basket?.length == 0 ? 
          <div className='checkout__maincontainer'>
            <div className='checkout__product__header'>
            <h1 >Your Shopping Basket is Empty!!</h1>
            <p> Let's click "add to basket" button to add products to purchase!! </p>
            </div>
          </div>
           : 
           <div className='checkout__maincontainer'>
            <div className='checkout__product__header'>
            <h1 >Your Shopping Basket Items</h1>
            <p>your products are below</p>
            </div>
           
           {basket.map(item => 
           < Checkoutproduct key = {item.id} item = {item} />
           )}
          </div>
        }
      </div>
      </div>
      {basket?.length ?  <div className='checkout__right'><h2>subtotal</h2></div> :<></>}
    </div>
  )
}

export default Checkout
