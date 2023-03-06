import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';


const CartItems = ({item}) => {
  const { removeItem } = useContext(CartContext);


  return (
    <div key={item.index}>
      <h2>{item.name}</h2>
      <ul>
        <li>Precio: {item.price}</li>
        <li>Categoria: {item.category}</li>
        <li>Cantidad: {item.quantity}</li>
      </ul>
      <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  )
}

export default CartItems;