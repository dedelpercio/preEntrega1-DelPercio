import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import Loading from '../Loading/Loading.jsx';
import { useEffect, useState } from 'react';
import { gFetch } from '../../utils/gFetch';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    gFetch(id, 'item')
      .then(response => setItem(response))
      .catch(error => console.error(error))
      .finally( () => setLoading(false))
  }, [id])

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

export default ItemDetailContainer;