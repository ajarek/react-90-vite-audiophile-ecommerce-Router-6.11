import './SectionProducts.css'
import CardProducts from '../../components/CardProducts/CardProducts'
const SectionProducts = () => {
  return (
    
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
      
  )
}

export default SectionProducts