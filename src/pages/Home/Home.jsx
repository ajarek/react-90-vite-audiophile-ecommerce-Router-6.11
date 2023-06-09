import Button from '../../components/Button/Button'
import CardProducts from '../../components/CardProducts/CardProducts'
import Footer from '../../components/Footer/Footer'
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
            />
          </div>
        </div>
      </section>
      <section className='audio-gear'>
        <div className='wrapper'>
          <div className='h2'>
            <h2>
              BRINGING YOU THE <span>BEST</span> <br /> AUDIO GEAR
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className='img'>
            <img
              src='/images/shared/desktop/image-best-gear.jpg'
              alt='image earphones yx1'
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
