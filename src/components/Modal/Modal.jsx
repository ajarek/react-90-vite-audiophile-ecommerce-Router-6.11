import './Modal.css'

const Modal = ({ onClick, itemName }) => {
  return (
    <div className='modal'>
      <div className='check'>✔️</div>
      Item {itemName} was added to cart <span onClick={onClick}>❌</span>
    </div>
  )
}

export default Modal
