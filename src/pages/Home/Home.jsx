import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
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
      
       <Section/>
      

      

     
     
    </div>
  )
}

export default Home
