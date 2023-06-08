import './CardProducts.css'

const CardProducts = ({ src, nameProduct }) => {
  return (
    <div className='card-products'>
      <div className='img'>
        <img
          src={src}
          alt={nameProduct}
        />
      </div>
      <h2>{nameProduct}</h2>
    </div>
  )
}

export default CardProducts
