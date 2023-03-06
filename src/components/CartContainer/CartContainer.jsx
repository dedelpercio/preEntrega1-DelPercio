import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CartOrderForm from '../CartOrderForm/CartOrderForm.jsx';
import CartItems from '../CartItems/CartItems.jsx';


const CartContainer = () => {
  const { cartList, clearCart } = useContext(CartContext);

  /**
   * If the cartList array has a length greater than 0, return true, otherwise return
   * false.
   * @returns The length of the cartList array.
   */
  const isActive = () => {
    return cartList.length > 0;
  }

  return (
    <div className="container">
      {
        isActive()
          ? <div>
              {
                cartList.map((item) => {
                  return (
                    <CartItems item={ item }/>
                  )
                })
              }
              <p>Precio total:</p>
              <button type="button" className='btn btn-secondary' onClick={clearCart}>Vaciar Carrito</button>
              <CartOrderForm />
            </div>
          : <div className="alert alert-danger" role="alert">
              No hay productos en su carrito de compras
            </div>
        }
    </div>
  )
}

export default CartContainer;