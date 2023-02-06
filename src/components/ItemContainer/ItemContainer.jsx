import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import Loading from '../Loading/Loading.jsx';
import { useEffect, useState } from 'react';
import { gFetch } from '../../utils/gFetch';

function ItemContainer() {

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch(1)
      .then(response => setItem(response))
      .catch(error => console.error(error))
      .finally( () => setLoading(false))
  }, [])

  const setRowClasses = () => loading
    ? 'row pt-5'
    : 'row';

  return (
    <div>
      <div className={setRowClasses()}>
        {
          loading 
            ? <Loading />
            : <ItemDetail item={ item }/>
        }
      </div>
    </div>
  )
}

export default ItemContainer;