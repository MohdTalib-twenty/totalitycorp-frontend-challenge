import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          company : action.company,
          title: action.title,
          img: action.img,
          qty: action.qty,
          price : action.price
        },
      ];
    case "REMOVE":
        let exArr = [...state];
        exArr.splice(action.index,1)
        return exArr;
    case "UPDATE":
        // let arr=[...state]
        // arr.find((food,index)=>{
        //     if(food.id === action.id){
        //         arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
        //     }
        //     return arr
        // })
        // return arr;
    default:
      console.log("Error in Reducer");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
