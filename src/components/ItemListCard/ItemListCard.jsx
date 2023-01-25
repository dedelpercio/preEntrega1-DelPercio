import './ItemListCard.css';

function ItemsListCard({items}) {
  // Categories element
  const itemsList = []

  // Add UI for category items into categories element
  items.map((item, index) => {
    itemsList.push(
      <div className="col" key={index}>
        <div className="card p-1">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{ item.name }</h5>
            <p className="card-text">{ item.description }</p>
          </div>
          <div className="d-grid">
            <a href={item.link} className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Ver mas</a>
          </div>
        </div>
      </div>
    );
  })

  return (itemsList)
}

export default ItemsListCard;