import './Speakers.css'
import data from '../../assets/data/products.json'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SectionProducts from '../../components/SectionProducts/SectionProducts'
import SectionAudioGear from '../../components/SectionAudioGear/SectionAudioGear'
import Footer from '../../components/Footer/Footer'
const Speakers = () => {
  const navigate = useNavigate()
  const handleEdit = (id) => {
    navigate(`/product-edit/${id}/`)
  }
  return (
    <div className='speakers'>
      <div className='title'>
        <h1>SPEAKERS</h1>
      </div>
      <div className='speakers-list'>
        {data &&
          data.products
            .filter((el) => el.category === 'speakers')
            .reverse()
            .map((product) => {
              return (
                <div
                  key={product.id}
                  className='card'
                >
                  <div className='left-card'>
                    <img
                      src={product.categoryImage.desktop}
                      alt={product.name}
                    />
                  </div>
                  <div className='right-card'>
                    {product.new ? (
                      <div className='new'>NEW PRODUCT</div>
                    ) : null}
                    <div className='name'>
                      <h2>{product.name}</h2>
                    </div>
                    <div className='description'>{product.description}</div>
                    <Button
                      label='SEE PRODUCT'
                      background={'#d87d4a'}
                      color={'#fff'}
                      onClick={() => handleEdit(product.id)}
                    />
                  </div>
                </div>
              )
            })}
      </div>
      <SectionProducts />
      <SectionAudioGear />
      <Footer />
    </div>
  )
}

export default Speakers
