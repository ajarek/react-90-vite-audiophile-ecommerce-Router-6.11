import './Section.css'
import CardProducts from '../../components/CardProducts/CardProducts'
import {  useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
const Section = () => {
  const navigate = useNavigate()
  const handleEdit = (id) => {
    navigate(`/product-edit/${id}/`)
  }
  return (
    <div>
     
      <section className='section-products'>
        <div className='product-speaker-zx9'>
          <div className='img'>
            <img
              src='/images/home/desktop/image-speaker-zx9.png'
              alt='image speaker zx9'
            />
          </div>
          <div className='product-speaker-zx9-info'>
            <h2>
              ZX9 <br /> SPEAKER
            </h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              label='SEE PRODUCT'
              background={'#000'}
              color={'#fff'}
              onClick={()=>handleEdit(2)}
            />
          </div>
        </div>
      </section>
      <section className='section-products-2'>
        <div className='product-speaker-zx7'>
          <div className='img'>
            <img
              src='/images/home/desktop/image-speaker-zx7.jpg'
              alt='image speaker zx9'
            />
          </div>
          <div className='h2'>
            <h2>ZX7 SPEAKER</h2>
          </div>
          <Button
            label='SEE PRODUCT'
            background={'transparent'}
            color={'#000'}
            onClick={()=>handleEdit(5)}
          />
        </div>
      </section>
      <section className='section-products-2'>
        <div className='product-earphones-yx1'>
          <div className='img'>
            <img
              src='/images/home/desktop/image-earphones-yx1.jpg'
              alt='image earphones yx1'
            />
          </div>
          <div className='wrapper'>
            <div className='h2'>
              <h2>YX1 EARPHONES</h2>
            </div>
            <Button
              label='SEE PRODUCT'
              background={'transparent'}
              color={'#000'}
              onClick={()=>handleEdit(1)}
            />
          </div>
        </div>
      </section>
     
      
    </div>
  )
}

export default Section