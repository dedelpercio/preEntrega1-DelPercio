import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import Loading from '../Loading/Loading.jsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const CartOrderForm = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });

  const [loading, setLoading] = useState(false);

  const [validEmail, setValidEmail] = useState(false);

  const {
    cartList,
    clearCart,
    addOrder,
    getTotalPrice
  } = useContext(CartContext);

  /**
   * It creates an order object with the buyer's data, the total price and the items
   * in the cart. Then we add the order to the orders collection and update the stock
   * of the items in the cart
   */
  const createOrder = (event) => {
    event.preventDefault();

    /* Setting the loading state to true. */
    setLoading(true);

    /* Creating a connection to the database and then it is creating a query to the
    orders collection. */
    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    /* Checking if the email and the confirmEmail are the same. If they are the
    same, it will add the order to the database. If they are not the same, it
    will set the validEmail state to true. */
    if(dataForm.email === dataForm.confirmEmail) {
      /* Setting the state of the validEmail variable to false. */
      setValidEmail(false);

      /* Deleting the confirmEmail property from the dataForm object. */
      delete dataForm.confirmEmail;

      /* Deleting the confirmEmail property from the dataForm object. */
      const order = {
        buyer: dataForm,
        total: getTotalPrice(),
        items: cartList
      };

      /* A promise chain to add an order */
      addDoc(queryCollection, order)
        .then((resp) => {
          addOrder(resp.id)
        })
        .catch(resp => console.error(resp))
        .finally(() => {
          clearCart();
          setDataForm({
            name: '',
            phone: '',
            email: ''
          });

          /* Setting the loading state to false. */
          setLoading(false);
        })
    } else {
      /* Setting the state of the validEmail variable to true and the loading state
      to false. */
      setValidEmail(true);
      setLoading(false);
    }
  };

  /**
   * A function that is used to update the state of the form.
   */
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
          ? <Loading text="Creando orden..."/>
          : <form className="form-group w-50" onSubmit={createOrder}>
              <p>Ingrese sus datos para generar la orden:</p>
              <input value={dataForm.name} className='form-control mb-1' type="text" name='name' placeholder='ingresar nombre' onChange={handlerOnChange} required/>
              <input value={dataForm.phone} className='form-control mb-1' type="number" name='phone' placeholder='ingresar telefono' onChange={handlerOnChange} required/>
              <input value={dataForm.email} className='form-control mb-1' type="text" name='email' placeholder='ingresar email' onChange={handlerOnChange} required/>
              <input value={dataForm.confirmEmail} className='form-control mb-1' type="text" name='confirmEmail' placeholder='Repetir email' onChange={handlerOnChange} required/>
              {
                validEmail
                  ? <div className="alert alert-danger" role="alert">Email no valido.</div>
                  : ''
              }
              <button type="submit" className='btn btn-success mt-2'>Crear Orden</button>
            </form>
      }
    </div>
  )
}

export default CartOrderForm;