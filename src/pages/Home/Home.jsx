import {  useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Section from '../../components/Section/Section'
import SectionProducts from '../../components/SectionProducts/SectionProducts'
import SectionAudioGear from '../../components/SectionAudioGear/SectionAudioGear'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const handleEdit = (id) => {
    navigate(`/product-edit/${id}/`)
  }
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
            onClick={()=>handleEdit(4)}
          />
        </div>
        <div className='hero-right'></div>

      </div>
        <SectionProducts/>
       <Section/>
       <SectionAudioGear/>
       <Footer/>

      

     
     
    </div>
  )
}

export default Home
