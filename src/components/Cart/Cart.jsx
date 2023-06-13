import {saveStorage,fetchStorage,deleteStorage} from '../../helper/localStorage'
import './Cart.css'
import { useState,useEffect } from 'react'
const Cart = () => {

  const [count, setCount] = useState([])

  useEffect(() => {
    // Pobranie danych z localStorage
    const storedCounters =fetchStorage('items');
    console.log(Object.values(storedCounters).map(el=>el.count))
    if (storedCounters) {
      setCount(Object.values(storedCounters).map(el=>el.count));
    }
  }, []);
  useEffect(() => {
    // Zapisanie danych do localStorage przy każdej zmianie wartości liczników
    saveStorage('items')
  }, [count]);

  const items =fetchStorage('items')
  const handleDelete =()=>{
    deleteStorage('items')

    const incrementCounter = (index) => {
      setCount((prevCounters) => {
        const updatedCounters = [...prevCounters];
        updatedCounters[index] = {
          ...updatedCounters[index],
          value: updatedCounters[index].value + 1,
        };
        return updatedCounters;
      });
    };



  }
  return (
    <div className='cart-wrapper'>
     { items?
      <div className="full">
        <h1>CART ({items.length})</h1>
        <button onClick={handleDelete}>Remove All</button>
        </div>:
        <div className='empty'>
          <div>Your cart is empty</div>
          <div className="img">
          <img src="/images/cart/empty-cart.png" alt="" />
          </div>
          </div>
     }
    {items&&items.map((el,index)=>{
     
      return(
        <div key={el.id} className="card">
          <div className="img">
            <img src={el.cartImage} alt="" />
          </div>
          <div className="info-wrapper">
          <div className="name">{el.shortName}</div>
          <div className="price">$ {(el.price).toFixed(2)}</div>
          </div>
          <div className='counter'>
            <button
              onClick={() => setCount( count[index] - 1)}
            >
              -
            </button>
            <div className='result'>{count[index]}</div>
            <button onClick={() => setCount(count[index] + 1)}>+</button>
          </div>
        </div>
      )
    })}
      </div>
  )
}

export default Cart