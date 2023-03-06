import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  /**
   * AddToCart is a function that takes in an item and adds it to the cartList array
   */
  const addToCart = (item) => {
    setCartList([
      ...cartList,
      item
    ]);
  }

  /**
   * It clears the cartList array.
   */
  const clearCart = () => {
    setCartList([]);
  }

  /**
   * Remove the item from the cart list that has the same id as the id passed in as
   * an argument.
   */
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