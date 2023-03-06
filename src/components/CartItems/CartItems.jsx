import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';


const CartItems = ({item}) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <ul>
              <li>Precio: ${item.price}</li>
              <li>Categoria: {item.category}</li>
              <li>Cantidad: {item.quantity}</li>
            </ul>
            <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartItems;