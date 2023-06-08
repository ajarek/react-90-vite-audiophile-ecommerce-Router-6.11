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
          <Button label={'SEE PRODUCT'} />
        </div>
        <div className='hero-right'></div>
      </div>
      <section className='section'>
        <CardProducts
          src={'/images/shared/desktop/image-headphones.png'}
          nameProduct={'HEADPHONES'}
          path={"/headphones"}
        />
        <CardProducts
          src={'/images/shared/desktop/image-speakers.png'}
          nameProduct={'SPEAKERS'}
          path={"/speakers"}
        />
        <CardProducts
          src={'/images/shared/desktop/image-earphones.png'}
          nameProduct={'EARPHONES'}
          path={"/earphones"}
        />
      </section>
    </div>
  )
}

export default Home
