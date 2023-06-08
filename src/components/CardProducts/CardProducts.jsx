import { Link } from 'react-router-dom'
import './CardProducts.css'

const CardProducts = ({ src, nameProduct,path }) => {
  return (
    <div className='card-products'>
      <div className='img'>
        <img
          src={src}
          alt={nameProduct}
        />
      </div>
      <h2>{nameProduct}</h2>
      <Link className='link-shop' to={path}>SHOP <img src="/images/shared/desktop/icon-arrow-right.svg" alt="icon arrow right" /></Link>
    </div>
  )
}

export default CardProducts
