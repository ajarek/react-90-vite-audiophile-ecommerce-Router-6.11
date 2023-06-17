import {
  saveStorage,
  fetchStorage,
  deleteStorage,
} from '../../helper/localStorage'
import { AppContext } from '../../App'
import { React, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Finish.css'

const Finish = () => {
  const [items, setItems] = useState(fetchStorage('items'))
  const { length,setLength,cart, setCart } = useContext(AppContext)

  const handleBack=()=>{
    deleteStorage('items')
    setItems(null)
    setLength(undefined)
  }
  return (
    <div className='finish'>
      <img
        src='images/checkout/icon-cash-on-delivery.svg'
        alt=''
      />
      <h2>THANK YOU FOR YOUR ORDER</h2>
      <p>You will receive an email confirmation shortly.</p>
      <div className='card-finish'>
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
      </div>
      <Link className='link-back' to={'/'} onClick={handleBack} >
         BACK TO HOME
      </Link>
    </div>
  )
}

export default Finish
