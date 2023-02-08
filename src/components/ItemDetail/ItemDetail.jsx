import ItemCount from '../ItemCount/ItemCount.jsx';

function ItemDetail({ item }) {
  return (
    <div className="col">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt={ item.name } />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ item.name }</h5>
              <p className="card-text">{ item.description }</p>
              <h3>${ item.price }</h3>
              <span className="badge bg-warning text-dark me-1 mb-1">{ item.category }</span>
              <span className="badge bg-warning text-dark mb-1">{ item.stock } in stock</span>
              <ItemCount init={1} stock={item.stock} onAdd={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
