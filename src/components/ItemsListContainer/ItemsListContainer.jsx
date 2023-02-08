import './ItemsListContainer.css';
import ItemListMap from '../ItemsListMap/ItemsListMap.jsx';
import Loading from '../Loading/Loading.jsx';
import { useEffect, useState } from 'react';
import { gFetch } from '../../utils/gFetch';
import { useParams } from 'react-router-dom';

function ItemsListContainer({greeting}) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    gFetch(id, 'category')
      .then(response => setProducts(response))
      .catch(error => console.error(error))
      .finally( () => setLoading(false))
  }, [id])

  const setRowClasses = () => loading
    ? 'row pt-5'
    : 'row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4';

  return (
    <div>
      <h2>{greeting}</h2>
      <div className={setRowClasses()}>
        {
          loading 
            ? <Loading />
            : <ItemListMap items={ products }/>
        }
      </div>
    </div>
  )
}

export default ItemsListContainer;