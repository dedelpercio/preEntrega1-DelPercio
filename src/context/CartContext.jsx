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

  const removeItem = (idToRemove) => {
    const updatedCartList = cartList.filter(item => item.id !== idToRemove);
    setCartList(updatedCartList);
  }

  return(
    <CartContext.Provider value={{
      cartList,
      addToCart,
      clearCart,
      removeItem
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;