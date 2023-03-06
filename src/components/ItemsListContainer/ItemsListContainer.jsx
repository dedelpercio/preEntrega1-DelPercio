import './ItemsListContainer.css';
import ItemListMap from '../ItemsListMap/ItemsListMap.jsx';
import Loading from '../Loading/Loading.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemsListContainer({greeting}) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    /* Getting the firestore and querying the products collection. */
    const db = getFirestore();
    const q = query(
      collection(db, 'products'),
      id ? where('category', '==', id) : ''
    );
    
    /* Setting the loading state to true. */
    setLoading(true);

    /* Getting the data from the database and setting it to the state. */
    getDocs(q)
      .then(response => setProducts(response.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
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