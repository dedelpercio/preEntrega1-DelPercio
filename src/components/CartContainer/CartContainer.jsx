import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CartOrderForm from '../CartOrderForm/CartOrderForm.jsx';
import CartItems from '../CartItems/CartItems.jsx';


const CartContainer = () => {
  const {
    clearCart,
    getTotalPrice,
    cartList,
    orderId,
  } = useContext(CartContext);

  /**
   * If the cartList array has a length greater than 0, return true, otherwise return
   * false.
   * @returns The length of the cartList array.
   */
  const cartHasItems = () => {
    return cartList.length > 0;
  }

  return (
    <div className="container">
      {
        cartHasItems()
          ? <div>
              {
                cartList.map((item) => {
                  return (
                    <CartItems item={ item } key={item.id} />
                  )
                })
              }
              <p>Precio total: ${ getTotalPrice() }</p>
              <button type="button" className='btn btn-secondary' onClick={() => clearCart()}>Vaciar Carrito</button>
              <CartOrderForm />
            </div>
          : <div className="alert alert-danger" role="alert">
              No hay productos en su carrito de compras
            </div>
        }
        {
          orderId !== '' ? `Su orden fue generada exitosamente: ${orderId}` :  ''
        }
    </div>
  )
}

export default CartContainer;