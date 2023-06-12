import {saveStorage,fetchStorage} from '../../helper/localStorage'
import './Cart.css'

const Cart = () => {
  const items =fetchStorage('items')
  return (
    <div className='cart-wrapper'>
      <h1>CART</h1>
    {items.map((el)=>{
      return(
        <div key={el.id} className="card">
          <div className="img">
            <img src={el.cartImage} alt="" />
          </div>
          <div className="info-wrapper">
          <div className="name">{el.shortName}</div>
          <div className="price">$ {(el.price).toFixed(2)}</div>
          </div>
          <div className="count">{el.count}</div>
        </div>
      )
    })}
      </div>
  )
}

export default Cart