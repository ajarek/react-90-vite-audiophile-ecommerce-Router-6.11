import { fetchStorage } from '../../helper/localStorage'
import { React, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Finish from '../../components/Finish/Finish'
import FullPageLayout from '../../components/FullPageLayout/FullPageLayout'
import { Form } from '../../helper/Form/Form'
import './Checkout.css'

const Checkout = () => {
  const [items, setItems] = useState(fetchStorage('items'))
  const [finish, setFinish] = useState(false)
  const handleForm = (data) => {
    console.log(data)
    setFinish(true)
  }
  return (
    <>
      {finish ? (
        <FullPageLayout>
          <Finish />
        </FullPageLayout>
      ) : null}
      <div className='checkout'>
        <div className='checkout-wrapper'>
          <div className='form'>
            <h2>CHECKOUT</h2>
            <Form onSubmit={handleForm} />
          </div>
          <div className='summary'>
            <h2>SUMMARY</h2>

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
                    <div className='sum'>
                      $ {(el.price * el.count).toFixed(2)}
                    </div>
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
            <div className='shipping'>
              <div className='text'>SHIPPING</div>
              <h2>
                $<span>50.00</span>{' '}
              </h2>
            </div>
            <div className='shipping'>
              <div className='text'>VAT (INCLUDED)</div>
              {items ? <div className='text'></div> : null}
              <h2>
                {items
                  ? '$' +
                    items
                      .reduce(
                        (acc, item) =>
                          acc + (item.price * item.count * 23) / 100,
                        0
                      )
                      .toFixed(2)
                  : null}
              </h2>
            </div>
            <div className='shipping'>
              <div className='text'>GRAND TOTAL</div>
              {items ? <div className='text'></div> : null}
              <h2 style={{ color: '#d87d4a' }}>
                {items
                  ? '$' +
                    items
                      .reduce(
                        (acc, item) => acc + item.price * item.count * 1.23,
                        50
                      )
                      .toFixed(2)
                  : null}
              </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Checkout
