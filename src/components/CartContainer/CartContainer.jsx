import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

const CartContainer = () => {
  const { cartList, clearCart } = useContext(CartContext);

  console.log(cartList);

  return (
    <div>
      {
        cartList.map((item) => {
          return (
            <div key={item.index}>
              <h2>{item.name}</h2>
              <ul>
                <li>Precio: {item.price}</li>
                <li>Categoria: {item.category}</li>
                <li>Cantidad: {item.quantity}</li>
              </ul>
            </div>
          )
        })
      }
      <button type="button" className='btn btn-secondary' onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer;