import './Footer.css'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <nav className='footer-nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
            <img
              src='/images/shared/desktop/logo.svg'
              alt='logo'
            />
          </Link>
        </div>

        <ul className={'wrapper'}>
          <Link
            className='link'
            to={'/'}
          >
            <h1> HOME</h1>
          </Link>
          <Link
            className='link'
            to={'/headphones'}
          >
            <h1> HEADPHONES</h1>
          </Link>
          <Link
            className='link'
            to={'/speakers'}
          >
            <h1>SPEAKERS</h1>
          </Link>
          <Link
            className='link'
            to={'/earphones'}
          >
            <h1>EARPHONES</h1>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Footer
