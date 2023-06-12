import { redirect, useParams, useNavigate} from 'react-router-dom'
import data from '../../assets/data/products.json'
import Button from '../../components/Button/Button'
import './ProductEdit.css'
import { useState } from 'react'

const ProductEdit = () => {
  const navigate = useNavigate()
  const handleOthers = (slug) => {
    const product = data.products?.find((el) =>el.slug==slug)
   console.log(product);
    const id=product.id
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/product-edit/${id}/`)
  }
  const [count, setCount] = useState(1)
  let { id } = useParams()
  const product = data.products?.find((el) => el.id === +id)

  return (
    <div className='product-edit'>
      <div className='card'>
        <div className='left-card'>
          <img
            src={product.categoryImage.desktop}
            alt={product.name}
          />
        </div>
        <div className='right-card'>
          {product.new ? <div className='new'>NEW PRODUCT</div> : null}
          <div className='name'>
            <h2>{product.name}</h2>
          </div>
          <div className='description'>{product.description}</div>
          <div className='price'>$ {product.price.toFixed(2)}</div>
          <div className='counter'>
            <button
              onClick={() => setCount(count <= 1 ? (count = 1) : count - 1)}
            >
              -
            </button>
            <div className='result'>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <Button
            label='ADD TO CART'
            background={'#d87d4a'}
            color={'#fff'}
          />
        </div>
      </div>
      <div className='info-product'>
        <div className='features'>
          <h2>FEATURES</h2>
          <p>{product.features}</p>
        </div>
        <div className='box'>
          <h2>IN THE BOX</h2>
          {product.includedItems.map((item, index) => {
            return (
              <div
                key={index}
                className='wrapper'
              >
                <p>{item.quantity}x</p>
                <p>{item.item}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='gallery'>
        <div className='gallery-left'>
          <img
            src={product.gallery.first.desktop}
            alt=''
          />
          <img
            src={product.gallery.second.desktop}
            alt=''
          />
        </div>
        <div className='gallery-right'>
          <img
            src={product.gallery.third.desktop}
            alt=''
          />
        </div>
        
      </div>
      <div className="like">
          <h2>YOU MAY ALSO LIKE</h2>
          <div className="images-wrapper">
            <div className="img">
            <img src={product.others[0].image.desktop} alt='image others' />
            <h3>{product.others[0].name}</h3>
             <Button
            label='SEE PRODUCT'
            background={'#d87d4a'}
            color={'#fff'}
            onClick={()=>handleOthers(product.others[0].slug)}
          />
            </div>
            <div className="img">
            <img src={product.others[1].image.desktop} alt='image others' />
            <h3>{product.others[1].name}</h3>
             <Button
            label='SEE PRODUCT'
            background={'#d87d4a'}
            color={'#fff'}
            onClick={()=>handleOthers(product.others[1].slug)}
          />
            </div>
            <div className="img">
            <img src={product.others[2].image.desktop} alt='image others' />
            <h3>{product.others[2].name}</h3>
             <Button
            label='SEE PRODUCT'
            background={'#d87d4a'}
            color={'#fff'}
            onClick={()=>handleOthers(product.others[2].slug)}
          />
            </div>
             
              
          </div>
        </div>
    </div>
  )
}

export default ProductEdit
