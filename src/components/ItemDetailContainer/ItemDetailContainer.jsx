import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import Loading from '../Loading/Loading.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  /* A hook that is called when the component is mounted. It is used to fetch the
  data from the database. */
  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, 'products', id);
    setLoading(true);
    getDoc(query)
      .then(response => setItem({ id: response.id, ...response.data() }))
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