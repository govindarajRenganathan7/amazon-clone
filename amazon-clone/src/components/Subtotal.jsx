import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';
import { subtotal } from './reducer';


const Subtotal = () => {
  const [ {basket} ] = useStateValue();
  let total = subtotal(basket)
  console.log(total)
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText = {(value) => 
        
        <>
        <p>
          <strong>
          Subtotal {basket?.length} {basket?.length  == 1 ? "item" : "items" }  : {`${value}`}
          </strong>
        </p>
        <p className='parrent'>
        <input type='checkbox' className='giftcheck'/><small >This order contains a gift</small>
        </p>
        </>
      }
      decimalScale={2}
      value = {total}
      prefix='$ '
      thousandSeparator={true}
      displayType='text'
      />
      <button>
        Proceed to checkout
      </button>
    </div>
  )
}

export default Subtotal
