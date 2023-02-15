import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList([
      ...cartList,
      item
    ]);
  }

  const clearCart = () => {
    setCartList([]);
  }

  return(
    <CartContext.Provider value={{
      cartList,
      addToCart,
      clearCart
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;