import Footer from '../../components/Footer/Footer'
import {Form} from '../../helper/Form/Form'
import './Checkout.css'

const Checkout = () => {
  const handleForm = (data) => {
    console.log(data);
  }
  return (
    <div className='checkout'>
      <div className='checkout-wrapper'>
        <div className='form'>
          <h2>CHECKOUT</h2>
          <Form onSubmit={handleForm}/>
        </div>
        <div className='summary'><h2>SUMMARY</h2></div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
