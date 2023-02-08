import React, { useState } from 'react';

function ItemDetail({init, stock, onAdd}) {
  const [count, setCount] = useState(init);
  
  return (
    <div className="mt-3">
      <button className="btn btn-secondary me-1" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="btn btn-primary mx-1"> Add {count} To Cart</button>
      <button className="btn btn-secondary ms-1" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

export default ItemDetail;
