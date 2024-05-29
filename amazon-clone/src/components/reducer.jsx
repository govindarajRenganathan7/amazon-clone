import React from "react";

export const initialstate = {
    basket : [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
        return {...state,basket:[...state.basket,{...action.item}]}

        break;
  
    default:
        return state
        break;
  }
}
 
export default reducer;
