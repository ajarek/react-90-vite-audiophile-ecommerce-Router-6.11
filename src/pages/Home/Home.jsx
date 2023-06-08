import Button from '../../components/Button/Button'
import CardProducts from '../../components/CardProducts/CardProducts'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='hero-left'>
          <h3>NEW PRODUCT</h3>
          <h1>
            XX99 MARK II <br />
            HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            label={'SEE PRODUCT'}
            background={'#d87d4a'}
            color={'#fff'}
          />
        </div>
        <div className='hero-right'></div>
      </div>
      <section className='section'>
        <CardProducts
          src={'/images/shared/desktop/image-headphones.png'}
          nameProduct={'HEADPHONES'}
          path={'/headphones'}
        />
        <CardProducts
          src={'/images/shared/desktop/image-speakers.png'}
          nameProduct={'SPEAKERS'}
          path={'/speakers'}
        />
        <CardProducts
          src={'/images/shared/desktop/image-earphones.png'}
          nameProduct={'EARPHONES'}
          path={'/earphones'}
        />
      </section>

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
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
