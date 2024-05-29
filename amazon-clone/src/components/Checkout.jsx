import React from 'react'
import add from '../assets/primeday.png'
import './Checkout.css'
import { useStateValue } from './stateProvider'

const Checkout = () => {
  const [ {basket}, dispatch ] = useStateValue()

  return (
    <div className='checkout'>
      <img src={add} alt="add image" className='checkoout__ad' />
      <div className="checkout__header">
        {
          basket?.length == 0 ? 
          <h1>Your Basket is Empty</h1> : <h1>Your Basket Items</h1>
        }
      </div>
    </div>
  )
}

export default Checkout
