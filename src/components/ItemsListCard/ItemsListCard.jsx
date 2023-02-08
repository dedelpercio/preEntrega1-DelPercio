import './ItemsListCard.css';
import { NavLink } from 'react-router-dom';

function ItemsListCard({item}) {
  return(
    <div className="col">
    <div className="card p-1">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{ item.name }</h5>
        <p className="card-text">{ item.description }</p>
      </div>
      <div className="d-grid">
        <NavLink className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true" to={`/detail/${item.id}`}>Ver mas</NavLink>
      </div>
    </div>
  </div>
  )
}

export default ItemsListCard;