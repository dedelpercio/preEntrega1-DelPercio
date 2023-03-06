import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [orderId, setorderId] = useState('');

  /**
   * AddToCart is a function that takes in an item and adds it to the cartList array
   */
  const addToCart = (item) => {
    // Reset order id
    setorderId('');
    
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
  };

  /**
   * It takes an array of objects, and returns the sum of the quantity property of
   * each object
   * @returns The total number of items in the cart.
   */
  const getTotalItems = () => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  };

  /**
   * It takes an array of objects, and returns the sum of the price property of each
   * object
   * @returns The total price of all items in the cart.
   */
  const getTotalPrice = () => {
    return cartList.reduce((acc, item) => acc + item.price, 0);
  }

  /**
   * The function takes in an id and sets the orderId state to that id
   */
  const addOrder = (id) => {
    setorderId(id);
  }

  return(
    <CartContext.Provider value={{
      cartList,
      addToCart,
      clearCart,
      removeItem,
      getTotalItems,
      getTotalPrice,
      addOrder,
      orderId,
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;