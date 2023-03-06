import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount({init, stock, onAdd}) {
  const [count, setCount] = useState(init);
  const [add, setAdd] = useState(false);

  /**
   * If the count is less than the stock, add one to the count
   */
  const addItem = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  /**
   * If the count is greater than the initial value, then set the count to the
   * current count minus one
   */
  const removeItem = () => {
    if(count > init) {
      setCount(count - 1)
    }
  }

  const addItemToCart = () => {
    setAdd(true);
    onAdd(count);
  }

  const addBtn = (
    <div>
      <button className="btn btn-secondary me-1" onClick={removeItem}>
        -
      </button>
      <span> { count } </span>
      <button className="btn btn-secondary ms-1" onClick={addItem}>
        +
      </button>
      <button
        type="button"
        className="btn btn-primary d-block mt-2"
        onClick={addItemToCart}>
        Agregar al Carrito
      </button>
    </div>
  );

  const continueBtn = (
    <div>
      <Link to='/' type="button" className="btn btn-primary me-2">
        Continuar Comprando
      </Link>
      <Link to='/cart' type="button" className="btn btn-secondary">
        Ir al Carrito
      </Link>
    </div>
  );
  
  return (
    <div className="mt-3">
      { add ? continueBtn : addBtn }
    </div>
  )
}

export default ItemCount;
