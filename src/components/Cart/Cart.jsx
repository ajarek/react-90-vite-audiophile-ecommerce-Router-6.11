import {saveStorage,fetchStorage,deleteStorage} from '../../helper/localStorage'
import { React, useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../App'
import Button from '../Button/Button'
import './Cart.css'
const Cart = () => {
  const { length,setLength,cart, setCart } = useContext(AppContext)
  const [items, setItems] = useState(fetchStorage('items'))
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteStorage('items')
    setItems(null)
    setLength(undefined)
  }

  return (
    <div className='cart-wrapper'>
      {items ? (
        <div className='full'>
          <h1>CART ({length})</h1>
          <button onClick={handleDelete}>Remove All</button>
        </div>
      ) : (
        <div className='empty'>
          <div>Your cart is empty</div>
          <div className='img'>
            <img
              src='/images/cart/empty-cart.png'
              alt=''
            />
          </div>
        </div>
      )}
      {items &&
        items.map((el) => {
          return (
            <div
              key={el.id}
              className='card'
            >
              <div className='img'>
                <img
                  src={el.cartImage}
                  alt=''
                />
              </div>
              <div className='info-wrapper'>
                <div className='name'>{el.shortName}</div>
                <div className='price'>$ {el.price.toFixed(2)}</div>
              </div>
              <div className='count'>pcs {el.count}</div>
              <div className='sum'>$ {(el.price * el.count).toFixed(2)}</div>
            </div>
          )
        })}
      <div className='total'>
        {items ? <div className='text'>TOTAL</div> : null}
        <h2>
          {items
            ? '$' +
              items
                .reduce((acc, item) => acc + item.price * item.count, 0)
                .toFixed(2)
            : null}
        </h2>
      </div>
      {items? <Button label={'CHECKOUT'} onClick={()=> {navigate("/checkout");setCart(false)}} background={'#d87d4a'} color={'#fff'}/>:null}
    </div>
  )
}

export default Cart
