import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import Loading from '../Loading/Loading.jsx';
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';


const CartOrderForm = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);

  const { cartList, clearCart } = useContext(CartContext);

  const createOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: dataForm,
      total: 100,
      items: cartList
    };

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    // Add order
    addDoc(queryCollection, order)
      .then(() => setLoading(true))
      .catch(resp => console.log(resp))
      .finally(() => {
        clearCart();
        setDataForm({
          name: '',
          phone: '',
          email: ''
        });
        setLoading(false);
      })

    // Update items stock
    const queryDoc = doc(db, 'products', '36oZMz1Pzg0PkyaRbhk3');
    updateDoc(queryDoc, {
      stock: 10
    })
    .then(() => console.log('updated'))
  };

  const handlerOnChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className='d-flex justify-content-center mt-3 p-5 align-items-center border border-2 border-secondary rounded'>
      {
        loading 
          ? <Loading />
          : <form className="form-group w-50" onSubmit={createOrder}>
              <input value={dataForm.name} className='form-control' type="text" name='name' placeholder='ingresar nombre' onChange={handlerOnChange} required/>
              <input value={dataForm.phone} className='form-control' type="number" name='phone' placeholder='ingresar telefono' onChange={handlerOnChange} required/>
              <input value={dataForm.email} className='form-control' type="text" name='email' placeholder='ingresar email' onChange={handlerOnChange} required/>
              <input className='form-control' type="text" name='validarEmail' placeholder='Repetir email' onChange={handlerOnChange} required/>
              <button type="submit" className='btn btn-success mt-2'>Crear Orden</button>
            </form>
      }
    </div>
  )
}

export default CartOrderForm;