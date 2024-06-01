import React from "react";

export const subtotal = (b) => {
   return b.reduce((amount, item) => amount + item.price, 0 )
  }

export const initialstate = {
    basket : [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
        return {...state,basket:[...state.basket,{...action.item}]}
        break;
    case "REMOVE_FROM_BASKET":
        const newBasket = [...state.basket];
        const index = state.basket.findIndex(basketItem => basketItem.id == action.id);
        if(index >= 0){
            newBasket.splice(index,1);
        }
        
        return {...state, basket:newBasket}
    default:
        return state
        break;
  }
}
 
export default reducer;
